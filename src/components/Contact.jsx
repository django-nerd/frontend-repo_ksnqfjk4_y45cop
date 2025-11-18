import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#07070a] to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_400px_at_50%_10%,rgba(56,189,248,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Let’s build</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Let’s engineer your next hit.
            </h2>
            <p className="mt-4 text-white/70 max-w-lg">
              Tell us about your goals and timeline. We’ll come back with a tailored approach and next steps.
            </p>

            <ul className="mt-8 space-y-2 text-white/70 text-sm">
              <li>• Response within 24 hours</li>
              <li>• Book a discovery call or get a quick quote</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/60 mb-1">Name</label>
                <input required className="w-full rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Email</label>
                <input type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-white/60 mb-1">Company</label>
                <input className="w-full rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Brand / Organization" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-white/60 mb-1">What do you need?</label>
                <textarea required rows={4} className="w-full rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Editing, motion design, full production, strategy…" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <button type="submit" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white backdrop-blur border border-white/10 bg-white/5 hover:border-cyan-400/40 transition">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-400/20 group-hover:via-fuchsia-500/10 group-hover:to-violet-500/20 blur-md" />
                  <span className="relative">Send inquiry</span>
                </button>
                {sent && <span className="text-xs text-emerald-400">Sent. We’ll reply shortly.</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
