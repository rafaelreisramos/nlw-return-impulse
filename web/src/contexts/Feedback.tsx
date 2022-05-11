import { createContext, ReactNode, useContext, useState } from 'react'
import { FeedbackType } from '../components/WidgetForm'

export type Feedback = {
  type: FeedbackType
  comment: string
  screenshot: string | null
}

type FeedbackContextData = {
  feedbacks: Feedback[]
  addFeedback: (feedback: Feedback) => void
}

const FeedbackContextInitialState = {
  feedbacks: [],
  addFeedback: () => null
}

const FeedbacksContext = createContext<FeedbackContextData>(
  FeedbackContextInitialState
)

type FeedbacksProviderProps = {
  children: ReactNode
}

export default function FeedbacksProvider({
  children
}: FeedbacksProviderProps) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  const addFeedback = (feedback: Feedback) => {
    setFeedbacks([...feedbacks, feedback])
    console.log(feedback)
  }
  return (
    <FeedbacksContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbacksContext.Provider>
  )
}

export function useFeedback() {
  const { feedbacks, addFeedback: addFeedback } = useContext(FeedbacksContext)
  return { feedbacks, addFeedback }
}
