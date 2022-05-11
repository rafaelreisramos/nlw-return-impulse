import { FeedbacksTable } from '../../components/FeedbacksTable'
import { Widget } from '../../components/Widget'
import FeedbacksProvider from '../../contexts/Feedback'

export function Dashboard() {
  return (
    <div className="my-0 mx-auto h-screen max-w-6xl bg-white dark:bg-zinc-900">
      <FeedbacksProvider>
        <header className="h-40 bg-brand-500 pl-8 pt-8 text-4xl font-bold text-white">
          Feedbacks
        </header>
        <FeedbacksTable />
        <Widget />
      </FeedbacksProvider>
    </div>
  )
}
