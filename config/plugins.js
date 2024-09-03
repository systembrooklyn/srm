module.exports = ({ env }) => ({
    email: {
      provider: 'smtp', // نستخدم SMTP كـ provider لإرسال الإيميلات
      providerOptions: {
        host: 'smtp.gmail.com', // عنوان SMTP server - هنا بنستخدم Gmail
        port: 587, // البورت الخاص بـ Gmail SMTP
        secure: false, // False للـ TLS
        auth: {
          user: env('GMAIL_USER'), // البريد الإلكتروني اللي هيتم الإرسال منه
          pass: env('GMAIL_PASS'), // كلمة المرور أو App password للبريد
        },
      },
      settings: {
        defaultFrom: env('GMAIL_USER'), // البريد اللي هتظهر منه الإيميلات
        defaultReplyTo: env('GMAIL_USER'), // البريد اللي هيترد عليه
      },
    },
  });
  