import { useEffect, useRef } from 'react'

function useCountUp(end, duration = 1800) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const value = Math.floor(start + (end - start) * progress)
      el.textContent = value.toLocaleString()
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration])
  return ref
}

export default function Numbers() {
  const reachRef = useCountUp(200_000_000)
  const assetsRef = useCountUp(10_000)
  const campaignsRef = useCountUp(50)
  const retentionRef = useCountUp(95)

  return (
    <section id="numbers" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_50%_50%,rgba(217,70,239,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Scale, proven</h2>
          <div className="hidden sm:block h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
            <div className="relative">
              <div className="text-3xl font-semibold text-white"><span ref={reachRef} />+</div>
              <p className="mt-2 text-white/70">Total Reach</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
            <div className="relative">
              <div className="text-3xl font-semibold text-white"><span ref={assetsRef} />+</div>
              <p className="mt-2 text-white/70">Assets Delivered</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
            <div className="relative">
              <div className="text-3xl font-semibold text-white"><span ref={campaignsRef} />+</div>
              <p className="mt-2 text-white/70">Enterprise Campaigns</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />
            <div className="relative">
              <div className="text-3xl font-semibold text-white"><span ref={retentionRef} />%</div>
              <p className="mt-2 text-white/70">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
