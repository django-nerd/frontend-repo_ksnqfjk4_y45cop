import { useMemo } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ScrollParallax({ className = '', speed = 30, style }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useMemo(() => (reduce ? 0 : useTransform(scrollY, [0, 1200], [0, speed])), [scrollY, speed, reduce])

  if (reduce) {
    return <div className={className} style={style} />
  }

  return <motion.div className={className} style={{ y, ...style }} />
}
