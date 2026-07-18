import Iyzipay from 'iyzipay';

// IYZICO_API_KEY / IYZICO_SECRET_KEY tanımlı olmadığı sürece bu modül devre
// dışıdır — hesap açılıp gerçek anahtarlar .env'e girilene kadar ödeme
// endpoint'leri 503 döner, site geri kalanı bundan etkilenmez.
export function isIyzicoConfigured() {
  return Boolean(process.env.IYZICO_API_KEY && process.env.IYZICO_SECRET_KEY);
}

let client = null;
function getClient() {
  if (!isIyzicoConfigured()) return null;
  if (!client) {
    client = new Iyzipay({
      apiKey: process.env.IYZICO_API_KEY,
      secretKey: process.env.IYZICO_SECRET_KEY,
      uri: process.env.IYZICO_BASE_URL || 'https://sandbox-api.iyzipay.com',
    });
  }
  return client;
}

export function initializeCheckoutForm(request) {
  return new Promise((resolve, reject) => {
    const iyzipay = getClient();
    if (!iyzipay) {
      reject(new Error('iyzico yapılandırılmamış (IYZICO_API_KEY/IYZICO_SECRET_KEY eksik).'));
      return;
    }
    iyzipay.checkoutFormInitialize.create(request, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      if (result?.status !== 'success') {
        reject(new Error(result?.errorMessage || 'iyzico ödeme formu başlatılamadı.'));
        return;
      }
      resolve(result);
    });
  });
}

export function retrieveCheckoutForm(token) {
  return new Promise((resolve, reject) => {
    const iyzipay = getClient();
    if (!iyzipay) {
      reject(new Error('iyzico yapılandırılmamış (IYZICO_API_KEY/IYZICO_SECRET_KEY eksik).'));
      return;
    }
    iyzipay.checkoutForm.retrieve({
      locale: Iyzipay.LOCALE.TR,
      token,
    }, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export { Iyzipay };
