export default function Footer() {
  return (
    <footer className="relative bg-[#07070a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-white/80 hover:text-white font-semibold tracking-widest">UNKAR MEDIA</a>
          <nav className="flex items-center gap-6 text-white/60">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#clients" className="hover:text-white">Clients</a>
            <a href="#numbers" className="hover:text-white">Numbers</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} UNKAR MEDIA. All rights reserved.</div>
      </div>
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/30 to-violet-500/0 blur-lg pointer-events-none" />
    </footer>
  )
}
