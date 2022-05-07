import { useState } from 'react'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImageUrl,
      alt: 'imagem de um verme'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImageUrl,
      alt: 'imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestarFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-white p-4 shadow-lg dark:bg-zinc-900 md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestarFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestarFeedback}
            />
          )}
        </>
      )}

      <footer className="text-xs text-zinc-500 dark:text-zinc-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
