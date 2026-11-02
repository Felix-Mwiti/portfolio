import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-400">My recent work</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Featured Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-blue-400">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
