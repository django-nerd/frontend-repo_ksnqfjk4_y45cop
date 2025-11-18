import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'UNKAR MEDIA took us from strategy to screen with surgical precision and style.',
    name: 'A. Sharma',
    role: 'Head of Marketing, Fintech Co.'
  },
  {
    quote: 'Our campaign hit 12M+ views. Flawless execution from pre to post.',
    name: 'R. Mehta',
    role: 'Creative Director, D2C Brand'
  },
  {
    quote: 'Editing and motion design that truly elevated our brand film.',
    name: 'K. Singh',
    role: 'VP Brand, SaaS'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#07070a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_300px_at_50%_100%,rgba(56,189,248,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What clients say</h2>
          <div className="hidden sm:block h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-cyan-400/30 hover:bg-white/10 transition"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
              <div className="relative">
                <p className="text-white/90 text-lg">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-white/60">— {t.name}, {t.role}</footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
