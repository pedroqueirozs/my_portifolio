import { Github } from 'lucide-react';

const ProjectCard = ({ project }) => (
    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-3">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export const ProjectsList = ({ data }) => {
    return (
        <section id="projects" className="py-24">
            <div className="container">
                <h2 className="text-3xl font-bold mb-12">Projetos em Destaque</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
