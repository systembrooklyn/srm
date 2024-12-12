const crypto = require('crypto');

// توليد مفتاح سري عشوائي
const secretKey = crypto.randomBytes(64).toString('hex');
console.log('Generated Secret Key:', secretKey);
