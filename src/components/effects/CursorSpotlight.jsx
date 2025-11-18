import { useEffect, useRef } from 'react'
import { useReducedMotion, motion } from 'framer-motion'

export default function CursorSpotlight({ size = 280, strength = 0.25 }) {
  const ref = useRef(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) return
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [shouldReduce])

  if (shouldReduce) return null

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background: `radial-gradient(${size}px ${size}px at var(--x) var(--y), rgba(56,189,248,${strength}), transparent 60%)`,
        mixBlendMode: 'screen',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  )
}
