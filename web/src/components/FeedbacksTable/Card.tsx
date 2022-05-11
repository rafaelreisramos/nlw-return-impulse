import { FeedbackType, feedbackTypes } from '../WidgetForm'

type CardProps = {
  feedbackType: FeedbackType
  quantity: number
}

export function Card({ feedbackType, quantity }: CardProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <div className="rounded-md bg-zinc-100 py-4 px-6 drop-shadow-md dark:bg-zinc-800">
      <header className="flex items-center justify-between">
        <span className="text-xl leading-6">
          {`${feedbackTypeInfo.title}s`}
        </span>
        <img
          className="h-6 w-6"
          src={feedbackTypeInfo.image.src}
          alt={feedbackTypeInfo.image.alt}
        />
      </header>
      <h2 className="mt-3 text-center text-4xl">{quantity}</h2>
    </div>
  )
}
