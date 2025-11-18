import { motion } from 'framer-motion'

const clients = [
  'Netflix', 'Spotify', 'Adobe', 'Nike', 'Meta', 'YouTube', 'Mercedes', 'Samsung'
]

export default function Clients() {
  return (
    <section id="clients" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Trusted by category leaders</h2>
          <div className="hidden sm:block h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/30 hover:bg-white/10 transition h-24"
            >
              <span className="text-white/70 group-hover:text-white transition text-sm sm:text-base">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
