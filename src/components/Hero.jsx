import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs tracking-wide text-white/70">Luxury Media Production Studio</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
            Cinematic. Precise. Unforgettable.
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            UNKAR MEDIA crafts end-to-end production—strategy, shoots, edit, motion—engineered for reach and retention.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white backdrop-blur border border-white/10 bg-white/5 hover:border-cyan-400/40 transition">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-400/20 group-hover:via-fuchsia-500/10 group-hover:to-violet-500/20 blur-md" />
              <span className="relative">Start a Project</span>
            </a>
            <a href="#work" className="text-sm font-semibold text-white/80 hover:text-white transition">View Work</a>
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
