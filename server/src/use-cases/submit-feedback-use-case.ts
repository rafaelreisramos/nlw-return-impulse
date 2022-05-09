import { MailAdapter } from '../adapters/mail-adapter'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    if (!type) {
      throw new Error('Type is required')
    }

    if (!comment) {
      throw new Error('Comment is required')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="margin: 0 auto; font-family: sans-serif; font-size: 16px; color: #111;max-width: 660px">`,
        `<p><b>Tipo do feedback</b></p>`,
        `<p>${type}</p>`,
        `<hr />`,
        `<p><b>Comentário</b></p>`,
        `<p><small>${comment}</small></p>`,
        `<hr />`,
        `<p><b>Captura da tela</b></p>`,
        `<br />`,
        screenshot
          ? `<img src="${screenshot}" alt="feedback screenshot" style="max-width: 100%; object-fit:contain"/>`
          : '',
        `</div>`
      ].join('\n')
    })
  }
}
