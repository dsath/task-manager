const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'satherdevin@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome the the app, ${name}. Let me know how you get along with the app.`,
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'satherdevin@gmail.com',
    subject: `Sorry to see you go, ${name}!`,
    text: 'If there is any way we can improve our service, please let us know!'
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail

}
