import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0.5, 1, 0.5],
            scale: 1,
            y: [0, -20, 0],
            x: [0, 10, 0]
        }}
        transition={{
            duration: 5,
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse"
        }}
        className="absolute text-blue-500/20"
        style={{ left: x, top: y }}
    >
        <Icon size={48} />
    </motion.div>
);

export const Hero = ({ data }) => {
    return (
        <section className="min-h-[85vh] flex items-center pt-20 relative overflow-hidden">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl z-10"
                >
                    <span className="text-blue-500 font-medium tracking-wider text-sm mb-4 block">
                        {data.title}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        {data.headline.split('.')[0]}.
                        <span className="text-gray-500 block mt-2">{data.headline.split('.')[1]}</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        {data.bio}
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            Ver Projetos <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors text-white"
                        >
                            Contato
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Minimalist Animation */}
                <div className="hidden md:flex justify-center items-center relative h-[500px]">
                    {/* Abstract Background Glow */}
                    <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

                    {/* Central Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-[380px] h-[260px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative z-10 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-6 text-gray-400">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs ml-2 font-mono">pedro.dev — portfolio</span>
                        </div>

                        {/* Code Lines Animation */}
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${Math.random() * 40 + 40}% ` }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
                                    className="h-2 bg-white/10 rounded-full"
                                />
                            ))}
                            <div className="flex gap-3 mt-4">
                                <motion.div
                                    animate={{ width: ["30%", "40%", "30%"] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="h-20 w-1/3 bg-blue-500/20 rounded-lg border border-blue-500/30"
                                />
                                <motion.div
                                    animate={{ width: ["50%", "40%", "50%"] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="h-20 w-1/2 bg-white/5 rounded-lg border border-white/10"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Elements */}
                    <FloatingIcon icon={Code} delay={0} x="10%" y="20%" />
                    <FloatingIcon icon={Terminal} delay={1.5} x="80%" y="15%" />
                    <FloatingIcon icon={Cpu} delay={3} x="70%" y="80%" />
                </div>
            </div>
        </section>
    );
};
