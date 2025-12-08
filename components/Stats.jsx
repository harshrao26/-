'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Award, Globe, Zap, ArrowRight } from 'lucide-react';

export default function StatsV4() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { icon: Users, value: 500, suffix: '+', label: 'Happy Clients' },
        { icon: Award, value: 1000, suffix: '+', label: 'Projects Completed' },
        { icon: Globe, value: 50, suffix: '+', label: 'Countries Served' },
        { icon: Zap, value: 15, suffix: '+', label: 'Years Experience' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const CountUp = ({ end, duration = 2000, suffix = '' }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime;
            let animationFrame;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }, [isVisible, end, duration]);

        return <span>{count}{suffix}</span>;
    };

    return (
        <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-label-sm text-gray-500 mb-4 block">
                            Our Impact
                        </span>
                        <h2 className="text-heading-xl md:text-display-sm text-gray-900 mb-6 leading-none">
                            We deliver
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                exceptional results
                            </span>
                        </h2>
                        <p className="text-body-lg text-gray-600 mb-8 leading-relaxed">
                            Our track record speaks for itself. We've helped hundreds of businesses achieve their goals through innovative solutions and dedicated support.
                        </p>
                        <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-button hover:bg-gray-800 transition-all duration-300 hover:gap-4">
                            Learn More
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-gray-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                                    <stat.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                </div>

                                {/* Value */}
                                <div className="text-3xl font-semibold text-gray-900 mb-3 tabular-nums">
                                    {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
                                </div>

                                {/* Label */}
                                <div className="text-body-sm text-gray-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
