'use strict';

/**
 * A set of functions called "actions" for `email-test`
 */
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
module.exports = {
  async sendTestEmail(ctx) {
    const msg = {
      to: 'ahmed.amr61991@gmail.com', // Change to your recipient
      from: 'System@brooklynacademy.net', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  },
};

