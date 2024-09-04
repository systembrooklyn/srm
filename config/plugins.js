module.exports = ({ env }) => ({
  email: {
    provider: 'smtp', // نستخدم SMTP كموفر لإرسال الإيميلات
    providerOptions: {
      host: 'smtp.sendgrid.net', // عنوان SMTP server لـ SendGrid
      port: 465, // استخدم 587 للاتصالات غير المشفرة / TLS
      secure: false, // False للـ TLS
      auth: {
        user: 'apikey', // هذا هو اسم المستخدم لـ SendGrid ويجب أن يبقى كما هو
        pass: env('SENDGRID_API_KEY'), // كلمة المرور هي الـ API Key الخاصة بك من SendGrid
      },
    },
    settings: {
      defaultFrom: 'System@brooklynacademy.net', // البريد الذي سترسل منه الرسائل
      defaultReplyTo: 'ahmed.amr61991@gmail.com', // البريد الذي سيتم الرد عليه
    },
  },
});
