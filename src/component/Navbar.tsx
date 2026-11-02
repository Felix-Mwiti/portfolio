export default function Navbar() {
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">Felix <span className="text-blue-400">.</span></a>
        <div className="order-3 flex w-full items-center justify-between gap-3 md:order-none md:w-auto md:gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-blue-400">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">Hire Me</a>
      </div>
    </nav>
  )
}
