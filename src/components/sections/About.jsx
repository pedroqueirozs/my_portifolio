import React from 'react';

export const About = ({ data }) => {
    return (
        <section id="about" className="py-24 bg-neutral-900/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Sou um desenvolvedor apaixonado por criar soluções que impactam a vida das pessoas.
                                Combinando minha formação em Engenharia da Computação com experiência prática em desenvolvimento web.
                            </p>
                            <p>
                                Minha jornada começou em 2023 e desde então tenho me aprofundado no ecossistema JavaScript,
                                especialmente React e Node.js.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">Tecnologias</h3>
                        <div className="flex flex-wrap gap-3">
                            {data.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
