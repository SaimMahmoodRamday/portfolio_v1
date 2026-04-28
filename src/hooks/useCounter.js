import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

/**
 * Animates a counter from 0 to `target` over `duration` seconds when `inView` becomes true.
 */
export default function useCounter(target, inView, duration = 1.5) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.floor(latest))
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return value
}
