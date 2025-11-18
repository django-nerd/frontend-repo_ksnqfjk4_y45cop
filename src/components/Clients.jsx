import { motion, useReducedMotion } from 'framer-motion'

const clients = [
  'Netflix', 'Spotify', 'Adobe', 'Nike', 'Meta', 'YouTube', 'Mercedes', 'Samsung'
]

export default function Clients() {
  const reduce = useReducedMotion()
  return (
    <section id="clients" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Trusted by category leaders</h2>
          <div className="hidden sm:block h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="mt-10">
          <motion.div
            className="flex gap-6 will-change-transform"
            initial={false}
            animate={reduce ? { x: 0 } : { x: ['0%', '-50%'] }}
            transition={reduce ? {} : { repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...clients, ...clients].map((c, i) => (
              <motion.div
                key={i}
                whileHover={reduce ? {} : { scale: 1.04 }}
                className="min-w-[160px] flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/30 hover:bg-white/10 transition h-24"
              >
                <span className="text-white/70 hover:text-white transition text-sm sm:text-base">{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
