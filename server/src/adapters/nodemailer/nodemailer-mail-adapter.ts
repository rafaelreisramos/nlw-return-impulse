import nodemailer from 'nodemailer'
import { MailAdapter, MailAdapterData } from '../mail-adapter'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: MailAdapterData) {
    transporter.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Rafael Reis Ramos <rrramos@gmail.com>',
      subject,
      html: body
    })
  }
}
