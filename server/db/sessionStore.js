import session from 'express-session';
import { db } from './connection.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    sess TEXT NOT NULL,
    expires INTEGER NOT NULL
  )
`);

const getStmt = db.prepare('SELECT sess, expires FROM sessions WHERE sid = ?');
const upsertStmt = db.prepare(`
  INSERT INTO sessions (sid, sess, expires) VALUES (@sid, @sess, @expires)
  ON CONFLICT (sid) DO UPDATE SET sess = excluded.sess, expires = excluded.expires
`);
const destroyStmt = db.prepare('DELETE FROM sessions WHERE sid = ?');
const allStmt = db.prepare('SELECT sess FROM sessions');
const countStmt = db.prepare('SELECT COUNT(*) AS count FROM sessions');
const cleanupStmt = db.prepare('DELETE FROM sessions WHERE expires < ?');

const DAY_MS = 24 * 60 * 60 * 1000;

export class SQLiteSessionStore extends session.Store {
  constructor() {
    super();
    cleanupStmt.run(Date.now());
    this.cleanupInterval = setInterval(() => cleanupStmt.run(Date.now()), 60 * 60 * 1000);
    this.cleanupInterval.unref();
  }

  get(sid, callback) {
    try {
      const row = getStmt.get(sid);
      if (!row || row.expires < Date.now()) {
        callback(null, null);
        return;
      }
      callback(null, JSON.parse(row.sess));
    } catch (err) {
      callback(err);
    }
  }

  set(sid, sessionData, callback) {
    try {
      const expires = sessionData.cookie?.expires
        ? new Date(sessionData.cookie.expires).getTime()
        : Date.now() + DAY_MS;
      upsertStmt.run({ sid, sess: JSON.stringify(sessionData), expires });
      callback?.(null);
    } catch (err) {
      callback?.(err);
    }
  }

  destroy(sid, callback) {
    try {
      destroyStmt.run(sid);
      callback?.(null);
    } catch (err) {
      callback?.(err);
    }
  }

  touch(sid, sessionData, callback) {
    this.set(sid, sessionData, callback);
  }

  all(callback) {
    try {
      callback(null, allStmt.all().map((row) => JSON.parse(row.sess)));
    } catch (err) {
      callback(err);
    }
  }

  length(callback) {
    try {
      callback(null, countStmt.get().count);
    } catch (err) {
      callback(err);
    }
  }

  clear(callback) {
    try {
      db.exec('DELETE FROM sessions');
      callback?.(null);
    } catch (err) {
      callback?.(err);
    }
  }
}
