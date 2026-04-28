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
        animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.45 : 0.92 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: '#171411',
          boxShadow: '0 0 0 1px rgba(23,20,17,0.15), 0 6px 14px -6px rgba(23,20,17,0.4)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </motion.div>
  )
}
