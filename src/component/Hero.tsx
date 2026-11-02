export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-400">
          Available for opportunities
        </p>
        <p className="mb-3 text-lg text-slate-400">Hello, I'm</p>
        <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Felix Mwii <span className="text-blue-400">.</span>
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-blue-400 md:text-3xl">Frontend Developer</h2>
        <p className="mt-6 max-w-lg leading-8 text-slate-400">
          I build responsive, user-friendly and modern web applications using React, TypeScript and Tailwind CSS.
          I enjoy turning ideas and designs into functional digital experiences.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href="#projects" className="rounded-lg border border-slate-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
            View my work
          </a>
          <a href="https://github.com/felixmwii" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">GitHub</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex size-64 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 shadow-2xl shadow-blue-500/20 md:size-80 lg:size-96">
          <div aria-label="Developer" role="img" className="flex size-48 items-center justify-center rounded-full border border-blue-400/40 bg-slate-900 text-7xl md:size-60 lg:size-72 lg:text-9xl">
            {'\u{1F468}\u200D\u{1F4BB}'}
          </div>
          <div className="absolute bottom-0 right-0 rounded-xl border border-white/10 bg-slate-800 px-5 py-3 shadow-xl">
            Building the web
            <p className="text-sm font-semibold text-white">one project at a time</p>
          </div>
        </div>
      </div>
    </section>
  )
}
