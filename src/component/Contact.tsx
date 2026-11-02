export default function Contact() {
    return(
        <section id="contact" className="px-6 py-24">
            <div className="mx-auto max-w-3xl rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 text-center md:p-14">
                <h2 className="text-3xl font-bold text-white">Let's work together</h2>
                <p className="mt-4 leading-7 text-slate-400">
                    Interested in my work? Visit my GitHub profile to explore my projects and connect.
                </p>
                <a href="https://github.com/felixmwii" target="_blank" rel="noopener noreferrer"
                   className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                    Visit GitHub
                </a>
            </div>
        </section>
    )
}
