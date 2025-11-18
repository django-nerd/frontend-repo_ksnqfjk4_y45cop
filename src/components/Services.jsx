import { motion, useReducedMotion } from 'framer-motion'
import { Clapperboard, PenTool, Sparkles, Workflow, Video, Rocket } from 'lucide-react'
import Magnetic from './effects/Magnetic'

const services = [
  {
    icon: Clapperboard,
    title: 'Full Production Shoots',
    desc: 'Cameras, crew, and craft for brand films, campaigns, and performance creative.'
  },
  {
    icon: PenTool,
    title: 'Editing',
    desc: 'Narrative-first edits designed for completion and retention.'
  },
  {
    icon: Sparkles,
    title: 'Motion Design',
    desc: 'Premium titles, 3D, and kinetic typography with tasteful glow.'
  },
  {
    icon: Workflow,
    title: 'Content Strategy',
    desc: 'Systems that scale—formats, calendars, optimization, distribution.'
  },
  {
    icon: Video,
    title: 'Post-Production & Finishing',
    desc: 'Color, sound, and finishing that feel inevitable and premium.'
  },
  {
    icon: Rocket,
    title: 'Social Content Systems',
    desc: 'High-volume creative at quality; templates and toolchains built-in.'
  }
]

export default function Services() {
  const reduce = useReducedMotion()
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-[#07070a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_300px_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Capabilities</h2>
          <div className="hidden sm:block h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-fuchsia-400/30 hover:bg-white/10 transition will-change-transform"
              whileHover={reduce ? {} : { rotateX: 2, rotateY: -2, scale: 1.02 }}
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
              <div className="relative">
                <s.icon className="h-6 w-6 text-white/80" />
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Magnetic>
                    <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 hover-glow">Enquire</a>
                  </Magnetic>
                  <a href="#work" className="text-xs text-white/70 hover:text-white">Learn more</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
