import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function ParallaxSection({ children, strength = 10, className = '' }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tX = useTransform(mx, [-1, 1], [-strength, strength])
  const tY = useTransform(my, [-1, 1], [-strength, strength])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mx.set((x - 0.5) * 2)
      my.set((y - 0.5) * 2)
    }
    const onLeave = () => { mx.set(0); my.set(0) }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [mx, my])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ translateX: tX, translateY: tY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </motion.div>
      {children}
    </div>
  )
}
