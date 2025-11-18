import { useRef, useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero() {
  const [splineReady, setSplineReady] = useState(false)
  const [splineError, setSplineError] = useState(false)

  // Parallax: track pointer
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rX = useTransform(mx, [-1, 1], [-6, 6])
  const rY = useTransform(my, [-1, 1], [6, -6])
  const tXslow = useTransform(mx, [-1, 1], [-10, 10])
  const tYslow = useTransform(my, [-1, 1], [-10, 10])

  useEffect(() => {
    const el = containerRef.current
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
    <section ref={containerRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {/* Spline (with graceful fallback) */}
        {!splineError && (
          <Spline
            scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
            onLoad={() => setSplineReady(true)}
            onError={() => setSplineError(true)}
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {/* Fallback gradient animation if Spline fails or not ready */}
        {(!splineReady || splineError) && (
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.20),transparent),radial-gradient(1000px_500px_at_80%_110%,rgba(217,70,239,0.18),transparent)] animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/85" />
      </div>

      {/* Floating glow orbs */}
      <motion.div aria-hidden className="pointer-events-none absolute -z-0" style={{ translateX: tXslow, translateY: tYslow }}>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
          style={{ rotateX: rY, rotateY: rX }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 mb-6 hover:border-cyan-400/40 transition">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs tracking-wide text-white/70">Luxury Media Production Studio</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
            Cinematic. Precise. Unforgettable.
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            UNKAR MEDIA crafts end-to-end production—strategy, shoots, edit, motion—engineered for reach and retention.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white backdrop-blur border border-white/10 bg-white/5 hover:border-cyan-400/40 transition hover-glow"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-400/20 group-hover:via-fuchsia-500/10 group-hover:to-violet-500/20 blur-md" />
                <span className="relative">Start a Project</span>
              </motion.a>
            </Magnetic>
            <motion.a href="#work" whileHover={{ x: 2 }} className="text-sm font-semibold text-white/80 hover:text-white transition">View Work</motion.a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div className="h-px w-10 bg-white/20" />
            <p className="text-sm">Trusted by category leaders</p>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient for depth */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

function Magnetic({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const strength = 18
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`
    }
    const onLeave = () => { el.style.transform = 'translate(0,0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])
  return <span ref={ref} className="inline-block magnetic">{children}</span>
}
