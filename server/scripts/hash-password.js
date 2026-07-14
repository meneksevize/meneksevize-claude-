import bcrypt from 'bcryptjs';

const password = process.argv[2];

if (!password) {
  console.error('Kullanım: npm run hash-password -- "sifreniz"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);

console.log('\nBu satırı .env dosyanıza ekleyin:\n');
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
