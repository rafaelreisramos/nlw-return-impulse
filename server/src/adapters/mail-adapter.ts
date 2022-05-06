export type MailAdapterData = {
  subject: string
  body: string
}

export interface MailAdapter {
  sendMail: ({ body, subject }: MailAdapterData) => Promise<void>
}
