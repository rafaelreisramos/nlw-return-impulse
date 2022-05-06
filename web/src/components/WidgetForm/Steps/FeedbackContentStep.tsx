import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'
import { ScreenshotButton } from '../ScrenshotButton'

type FeedbackContentStepProps = {
  feedbackType: FeedbackType
  onFeedbackSent: () => void
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackSent,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    console.log(screenshot)
    console.log(comment)

    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-100 hover:text-zinc-400"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            className="h-6 w-6"
            src={feedbackTypeInfo.image.src}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <div className="flex w-full gap-2 py-8">
        <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
          <textarea
            className="min-h-[112px] w-full min-w-[304px] resize-none rounded-md border-zinc-600 bg-transparent text-sm text-zinc-100 placeholder-zinc-400 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            onChange={(event) => setComment(event.target.value)}
          />

          <footer className="mt-2 flex gap-2">
            <ScreenshotButton
              screenshot={screenshot}
              onScreenshotTook={setScreenshot}
            />

            <button
              type="submit"
              className="flex flex-1 items-center justify-center rounded-md border-transparent bg-brand-500 p-2 text-sm transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:bg-brand-500"
              disabled={comment.length === 0}
            >
              Enviar feedback
            </button>
          </footer>
        </form>
      </div>
    </>
  )
}