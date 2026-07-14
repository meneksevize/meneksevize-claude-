import {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(() => {
    setLoading(true);
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((json) => setAuthenticated(Boolean(json.authenticated)))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = useCallback(async (username, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error || 'Giriş başarısız.');
    }
    setAuthenticated(true);
    return json;
  }, []);

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setAuthenticated(false);
  }, []);

  return (
    <AdminAuthContext.Provider value={{
      authenticated, loading, login, logout,
    }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth, AdminAuthProvider içinde kullanılmalıdır.');
  return ctx;
}
