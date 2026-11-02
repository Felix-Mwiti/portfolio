import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-400">What I work with</p>
        <h2 className="mt-3 text-3xl font-bold text-white">My technical skills</h2>
        <p className="mt-4 text-slate-400">Technologies and tools I use in development.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-xl border border-white/10 bg-slate-900 px-5 py-6 text-center font-semibold text-white">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
