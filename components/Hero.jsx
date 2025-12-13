'use client';

import { Phone, Sparkles, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CreativeHeroSplit() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative min-h- pt-10 lg:pt-0  bg-black overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

            <div className="relative z-10   flex flex-col lg:flex-row">
                {/* Left Side - Content */}
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 lg:py-0">
                    <div className="max-w-2xl w-full">
                        {/* Badge */}
                        {/* {mounted && (
                            <div className="mb-10 animate-fade-in-down">
                                <div className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-md hover:border-purple-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/20 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors animate-pulse" />
                                    <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 text-transparent bg-clip-text relative z-10">Global IT Service Provider</span>
                                    <Zap className="w-4 h-4 text-pink-400 group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                        )} */}

                        {/* Headline */}
                        <div className="mb-10 ">
                            <h1 className={`text-display font-semibold mb-6 leading-[1.1] tracking-tight transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                <div className="relative mb-3">
                                    <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 animate-gradient-x drop-shadow-[0_0_50px_rgba(168,85,247,0.5)]">Technology.</span>
                                </div>
                                <div className="relative mb-3">
                                    <span className="relative inline-block">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 animate-gradient-x drop-shadow-[0_0_50px_rgba(168,85,247,0.5)]">
                                            Innovation.
                                        </span>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 blur-2xl opacity-20 -z-10"></div>
                                    </span>
                                </div>
                                <div className="relative">
                                    <span className="relative inline-block">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient-x drop-shadow-[0_0_50px_rgba(34,211,238,0.5)]">
                                            Security. Growth.
                                        </span>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 blur-2xl opacity-20 -z-10"></div>
                                    </span>
                                </div>
                            </h1>

                            <p className={`text-body-lg text-gray-300 leading-relaxed transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
                                        VEXALIX Technology Private Limited is a global provider of IT services, digital transformation, application development, cybersecurity, cloud solutions, and consulting services.
                                    </span>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 blur-xl opacity-10 -z-10"></div>
                                </span>
                            </p>
                        </div>

                        {/* Feature Tags */}
                        <div className={`grid grid-cols-3  gap-3 mb-10 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white text-xs font-semibold rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] border border-blue-400/30">
                                <span>Cloud Computing</span>
                                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping"></div>
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white text-xs font-semibold rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.4)] border border-orange-400/30">
                                <div className="w-1.5 h-1.5 bg-orange-200 rounded-full animate-ping"></div>
                                <span>Cyber Security</span>
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white text-xs font-semibold rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-blue-400/30">
                                <span>SaaS Development</span>
                                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping"></div>
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex md:flex-row flex-col  gap-4 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <Link href="/contact" className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 text-white rounded-full text-button hover:scale-105 transition-all duration-300  hover:shadow-[0_0_70px_rgba(168,85,247,0.8)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                                </div>
                                <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                                <span className="relative z-10">Get Started</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link href="/services" className="group relative px-6 py-3 bg-white/5 backdrop-blur-md text-white rounded-full text-button border-2 border-white/20  text-center hover:border-blue-500/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-300 transition-all">
                                    Our Services
                                </span>
                            </Link>
                        </div>

                        {/* Stats */}
                        {/* <div className={`grid grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {[
                                { value: '500+', label: 'Projects' },
                                { value: '98%', label: 'Satisfaction' },
                                { value: '15+', label: 'Years Exp' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-semibold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>

                {/* Right Side - Video Background */}
                <div className="flex-1 relative min-h-[400px] lg:min-h-screen">
                    {/* Video Container */}
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center' }}
                        >
                            <source src="/hero.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Gradient Overlay on video */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80 lg:to-black"></div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }

                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }

                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out;
                }
            `}</style>
        </div>
    );
}
