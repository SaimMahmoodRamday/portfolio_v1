import { motion } from 'framer-motion'
import useCustomCursor from '../hooks/useCustomCursor'

export default function CustomCursor() {
  const { enabled, x, y, hovering } = useCustomCursor()

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{
        translateX: x,
        translateY: y,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      <motion.div
        animate={{ scale: hovering ? 2 : 1, opacity: hovering ? 0.5 : 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#00d4ff',
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </motion.div>
  )
}
