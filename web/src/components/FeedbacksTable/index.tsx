import { useFeedback } from '../../contexts/Feedback'
import { FeedbackType, feedbackTypes } from '../WidgetForm'
import { Card } from './Card'

export function FeedbacksTable() {
  const { feedbacks } = useFeedback()

  return (
    <div className="-mt-14 ">
      <div className="grid grid-cols-3 gap-4 px-8">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Card
            key={key}
            feedbackType={key as FeedbackType}
            quantity={
              feedbacks.filter(
                (feedback) => feedback.type === (key as FeedbackType)
              ).length
            }
          />
        ))}
      </div>
      <section className="mt-14 max-w-6xl px-8">
        <table className="w-full table-fixed border-separate [border-spacing:0rem_0.75rem]">
          {feedbacks.length !== 0 ? (
            <thead>
              <tr>
                <th className="w-32 pl-2 text-left">Tipo</th>
                <th className="truncate pl-2 text-left">Comentário</th>
              </tr>
            </thead>
          ) : null}

          <tbody>
            {feedbacks.map((feedback, index) => {
              const { title, image } = feedbackTypes[feedback.type]
              return (
                <tr
                  key={index}
                  className="mt-10 bg-zinc-100 drop-shadow-sm dark:bg-zinc-800"
                >
                  <td className="py-4 px-2">
                    <div className="flex items-center">
                      <img
                        className="h-6 w-6"
                        src={image.src}
                        alt={image.alt}
                      />
                      <span className="ml-2 text-base font-normal text-zinc-500 dark:text-zinc-400">
                        {title}
                      </span>
                    </div>
                  </td>
                  <td className="truncate py-4 px-2">{feedback.comment}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
