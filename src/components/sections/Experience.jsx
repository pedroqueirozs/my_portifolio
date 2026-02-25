export const Experience = ({ data }) => {
    return (
        <section id="experience" className="py-24">
            <div className="container max-w-4xl">
                <h2 className="text-3xl font-bold mb-12">Experiência Profissional</h2>

                <div className="space-y-12">
                    {data.experience.map((job) => (
                        <div key={job.id} className="relative pl-8 border-l border-white/10">
                            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500" />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold">{job.role}</h3>
                                <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                            </div>
                            <h4 className="text-blue-400 mb-4">{job.company}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
