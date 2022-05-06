import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="flex h-6 w-6 items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="h-4 w-4 animate-spin" />
    </div>
  )
}
