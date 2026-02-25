import { Github, Linkedin } from 'lucide-react';

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container h-16 flex items-center justify-between">
            <span className="font-bold text-xl">Pedro.dev</span>
            <div className="flex gap-6 text-sm text-gray-300">
                <a href="#about" className="hover:text-white transition-colors">Sobre</a>
                <a href="#experience" className="hover:text-white transition-colors">Experiência</a>
                <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
                <a href="#contact" className="hover:text-white transition-colors">Contato</a>
            </div>
        </div>
    </nav>
);

const Footer = () => (
    <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Pedro Queiroz. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="https://github.com/pedroqueirozs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pedro-queiroz-dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                </a>
            </div>
        </div>
    </footer>
);

export const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};
