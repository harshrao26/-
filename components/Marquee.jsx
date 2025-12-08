'use client';

import {
    Code2, Database, Cloud, Shield, Cpu, Globe,
    Smartphone, Server, Lock, Zap, GitBranch, Layers
} from 'lucide-react';

export default function MarqueeV1() {
    const technologies = [
        { icon: Code2, name: 'Web Development', gradient: 'from-blue-600 to-indigo-600' },
        { icon: Database, name: 'Database Management', gradient: 'from-purple-600 to-pink-600' },
        { icon: Cloud, name: 'Cloud Solutions', gradient: 'from-cyan-600 to-blue-600' },
        { icon: Shield, name: 'Cybersecurity', gradient: 'from-emerald-600 to-teal-600' },
        { icon: Cpu, name: 'AI & ML', gradient: 'from-orange-600 to-red-600' },
        { icon: Globe, name: 'Digital Transformation', gradient: 'from-violet-600 to-purple-600' },
        { icon: Smartphone, name: 'Mobile Apps', gradient: 'from-green-600 to-emerald-600' },
        { icon: Server, name: 'Server Management', gradient: 'from-rose-600 to-pink-600' },
        { icon: Lock, name: 'Data Security', gradient: 'from-indigo-600 to-blue-600' },
        { icon: Zap, name: 'Performance Optimization', gradient: 'from-yellow-600 to-orange-600' },
        { icon: GitBranch, name: 'DevOps', gradient: 'from-teal-600 to-cyan-600' },
        { icon: Layers, name: 'Microservices', gradient: 'from-fuchsia-600 to-purple-600' },
    ];

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="w-16 h-1 bg-white mb-8"></div>
                <h2 className="text-heading-lg md:text-display-sm text-white mb-4 leading-none tracking-tight">
                    Technologies<br />We Master
                </h2>
                <p className="text-body text-gray-400 max-w-2xl">
                    Cutting-edge solutions powered by industry-leading technologies
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* First Row */}
                <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-6 animate-marquee">
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div
                                key={index}
                                className="group relative flex-shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 min-w-[300px] transition-all duration-500 hover:scale-105"
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                                <div className="relative flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <tech.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>
                                    <span className="text-body-lg text-white">{tech.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6 animate-marquee" aria-hidden="true">
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="group relative flex-shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 min-w-[300px] transition-all duration-500 hover:scale-105"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                <div className="relative flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <tech.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>
                                    <span className="text-lg font-semibild text-white">{tech.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row (Reverse) */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-6 animate-marquee-reverse">
                        {[...technologies, ...technologies].reverse().map((tech, index) => (
                            <div
                                key={index}
                                className="group relative flex-shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 min-w-[300px] transition-all duration-500 hover:scale-105"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                <div className="relative flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <tech.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>
                                    <span className="text-lg font-semibild text-white">{tech.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6 animate-marquee-reverse" aria-hidden="true">
                        {[...technologies, ...technologies].reverse().map((tech, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="group relative flex-shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 min-w-[300px] transition-all duration-500 hover:scale-105"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                <div className="relative flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <tech.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>
                                    <span className="text-lg font-semibild text-white">{tech.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
                .animate-marquee:hover,
                .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
