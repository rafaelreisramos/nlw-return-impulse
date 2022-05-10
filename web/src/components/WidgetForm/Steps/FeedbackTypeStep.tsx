import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

type FeedbackTypeStepProps = {
  onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChange
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-100 py-8 hover:border-brand-500 focus:border-brand-500 focus:outline-none dark:bg-zinc-800"
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
