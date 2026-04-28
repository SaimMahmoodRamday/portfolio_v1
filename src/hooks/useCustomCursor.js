import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Tracks mouse position and returns spring-smoothed x/y motion values.
 * Only active on pointer: fine devices.
 */
export default function useCustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 400, damping: 28, mass: 0.4 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(pointer: fine)')
    setEnabled(mq.matches)
    const onChange = () => setEnabled(mq.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const handleOver = (e) => {
      const t = e.target
      if (t && t.closest && t.closest('a, button, input, textarea, [role="button"], [data-cursor-hover]')) {
        setHovering(true)
      }
    }
    const handleOut = (e) => {
      const t = e.target
      if (t && t.closest && t.closest('a, button, input, textarea, [role="button"], [data-cursor-hover]')) {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [enabled, x, y])

  return { enabled, x: springX, y: springY, hovering }
}
