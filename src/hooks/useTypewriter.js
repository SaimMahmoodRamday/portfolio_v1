import { useEffect, useState } from 'react'

/**
 * Cycles through a list of phrases, typing and deleting each one.
 * Types at 40ms/char, deletes at 20ms/char, pauses between phrases.
 */
export default function useTypewriter(phrases, {
  typingSpeed = 40,
  deletingSpeed = 20,
  pauseAfterTyped = 1400,
  pauseAfterDeleted = 300
} = {}) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting | idle

  useEffect(() => {
    if (!phrases || phrases.length === 0) return
    const current = phrases[phraseIndex % phrases.length]
    let timer

    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      } else {
        timer = setTimeout(() => setPhase('deleting'), pauseAfterTyped)
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
      } else {
        timer = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length)
          setPhase('typing')
        }, pauseAfterDeleted)
      }
    }

    return () => clearTimeout(timer)
  }, [text, phase, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseAfterTyped, pauseAfterDeleted])

  return text
}
