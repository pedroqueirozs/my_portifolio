import { useState, useEffect } from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ project }) => (
    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors h-full">
        <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-3 shrink-0 ml-4">
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
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const githubUrl = data.social?.github || "https://github.com/pedroqueirozs";
                // Get the last part of the URL, handle trailing slashes
                const username = githubUrl.replace(/\/$/, '').split('/').pop() || "pedroqueirozs";
                
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=10`);
                if (!response.ok) {
                    throw new Error('Falha ao buscar projetos');
                }
                const repos = await response.json();
                
                const formattedProjects = repos.map(repo => ({
                    id: repo.id,
                    title: repo.name,
                    description: repo.description || "Nenhuma descrição fornecida.",
                    repoUrl: repo.html_url,
                    tech: repo.topics?.length > 0 ? repo.topics : (repo.language ? [repo.language] : [])
                }));
                
                setProjects(formattedProjects);
            } catch (err) {
                console.error("Erro ao carregar do GitHub, usando dados locais:", err);
                // Fallback to local profile data if fetch fails
                setProjects(data.projects || []);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [data.social?.github, data.projects]);

    return (
        <section id="projects" className="py-24">
            <div className="container">
                <h2 className="text-3xl font-bold mb-12">Projetos Recentes do GitHub</h2>
                {loading ? (
                    <div className="text-center text-gray-400 py-12">
                        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p>Carregando repositórios...</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
