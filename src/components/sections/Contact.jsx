import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

export const Contact = ({ data }) => {
    return (
        <section id="contact" className="py-24 bg-neutral-900/30">
            <div className="container text-center">
                <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                    Estou sempre aberto a novas oportunidades e desafios.
                    Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato!
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href={data.social.email}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <Mail size={20} />
                        <span>Email</span>
                    </a>
                    <a
                        href={data.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] rounded-full hover:bg-[#0077b5]/20 transition-colors"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href={data.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] rounded-full hover:bg-[#0077b5]/20 transition-colors"
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href={data.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] rounded-full hover:bg-[#25d366]/20 transition-colors"
                    >
                        <MessageSquare size={20} />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
