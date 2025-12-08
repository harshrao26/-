'use client';

import {
    Target,
    Eye,
    Award,
    Users,
    TrendingUp,
    Heart,
    Zap,
    Shield,
    Lightbulb,
    Clock,
    Building,
    ShoppingCart,
    GraduationCap,
    Landmark,
    Rocket,
    Stethoscope,
    Banknote,
    Laptop
} from 'lucide-react';
import { useState } from 'react';

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState('mission');

    const stats = [
        { value: '15+', label: 'Years Experience', icon: Clock },
        { value: '500+', label: 'Happy Clients', icon: Users },
        { value: '1000+', label: 'Projects Delivered', icon: Award },
        { value: '98%', label: 'Success Rate', icon: TrendingUp },
    ];

    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We constantly push boundaries to deliver cutting-edge solutions that drive results.',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Shield,
            title: 'Transparency',
            description: 'We maintain the highest standards of honesty and open communication in all our dealings.',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Zap,
            title: 'Quality',
            description: 'We are committed to delivering exceptional quality and excellence in everything we do.',
            color: 'from-emerald-500 to-teal-500',
        },
        {
            icon: Heart,
            title: 'Customer Success',
            description: 'Your success is our priority. We build lasting partnerships based on trust and delivering value.',
            color: 'from-rose-500 to-orange-500',
        },
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: '👩‍💼',
            bio: '15+ years of tech leadership',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: '👨‍💻',
            bio: 'Former tech lead at Fortune 500',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Design',
            image: '👩‍🎨',
            bio: 'Award-winning designer',
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'David Kim',
            role: 'VP Engineering',
            image: '👨‍💼',
            bio: 'Scaling teams & products',
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    const milestones = [
        { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
        { year: '2013', title: 'First Major Client', description: 'Partnered with Fortune 500 company, scaling to enterprise solutions' },
        { year: '2016', title: 'Global Expansion', description: 'Opened offices in 5 countries, serving clients worldwide' },
        { year: '2020', title: 'AI & ML Division', description: 'Launched cutting-edge AI solutions, leading industry innovation' },
        { year: '2023', title: '500+ Clients', description: 'Reached milestone of serving 500+ satisfied clients globally' },
        { year: '2025', title: 'Industry Leader', description: 'Recognized as top IT services provider with multiple awards' },
    ];

    return (
        <section className="relative bg-black overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

            {/* Gradient Accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="mb-20">
                    <div className="w-16 h-1 bg-white mb-8"></div>
                    <h1 className="font-semibold text-white mb-6 leading-none tracking-tight">
                        About
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                            Our Story
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl leading-relaxed">
                        VexaLix Technology Private Limited is a global provider of IT services, digital transformation, application development, cybersecurity, cloud solutions, and consulting services. Serving India, USA, UK, Europe, Dubai, Saudi Arabia, Qatar & Middle East.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 group text-center"
                        >
                            <stat.icon className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="font-semibold text-white mb-2" style={{ fontSize: 'clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)' }}>{stat.value}</div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission, Vision, Values Tabs */}
                <div className="mb-24">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        {[
                            { id: 'mission', label: 'Our Mission', icon: Target },
                            { id: 'vision', label: 'Our Vision', icon: Eye },
                            { id: 'values', label: 'Our Values', icon: Award },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-white text-black'
                                    : 'bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12">
                        {activeTab === 'mission' && (
                            <div className="animate-fade-in">
                                <h3 className="font-semibold text-white mb-6">Our Mission</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Deliver innovative, scalable, and secure digital solutions.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    We are committed to empowering businesses worldwide with cutting-edge technology that drives growth, efficiency, and digital transformation. Every project we undertake is guided by our dedication to excellence and client success.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="animate-fade-in">
                                <h3 className="font-semibold text-white mb-6">Our Vision</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Become a trusted global partner.
                                </p>
                                <p className="text-base text-gray-400 leading-relaxed">
                                    We aspire to be recognized worldwide as a leading technology provider, known for innovation, transparency, and the positive impact we create for businesses across all industries. Our vision is to help organizations seamlessly integrate technology with strategy to achieve unprecedented success.
                                </p>
                            </div>
                        )}

                        {activeTab === 'values' && (
                            <div className="animate-fade-in">
                                <h3 className="font-semibold text-white mb-8">Our Core Values</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {values.map((value, index) => (
                                        <div
                                            key={index}
                                            className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 group"
                                        >
                                            <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <value.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Industries We Serve */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="font-semibold text-white mb-4">Industries We Serve</h3>
                        <p className="text-gray-400">
                            Delivering specialized solutions across diverse sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'IT & Technology', icon: Laptop, color: 'from-blue-500 to-cyan-500' },
                            { name: 'Finance', icon: Banknote, color: 'from-green-500 to-emerald-500' },
                            { name: 'Healthcare', icon: Stethoscope, color: 'from-red-500 to-pink-500' },
                            { name: 'Retail', icon: ShoppingCart, color: 'from-orange-500 to-yellow-500' },
                            { name: 'E-commerce', icon: ShoppingCart, color: 'from-purple-500 to-pink-500' },
                            { name: 'Education', icon: GraduationCap, color: 'from-blue-500 to-indigo-500' },
                            { name: 'Government', icon: Landmark, color: 'from-gray-500 to-zinc-500' },
                            { name: 'Startups', icon: Rocket, color: 'from-rose-500 to-red-500' },
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 group text-center"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <industry.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-semibold text-white">{industry.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                {/* <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-5xl font-semibold text-white mb-4">Meet Our Team</h3>
                        <p className="text-xl text-gray-400">
                            The brilliant minds behind our success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 text-center"
                            >
                                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                                    {member.image}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                                <div className="text-purple-400 font-semibold mb-3">{member.role}</div>
                                <p className="text-sm text-gray-400">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Timeline/Milestones */}
                {/* <div>
                    <div className="text-center mb-12">
                        <h3 className="text-5xl font-semibold text-white mb-4">Our Journey</h3>
                        <p className="text-xl text-gray-400">
                            Key milestones that shaped our story
                        </p>
                    </div>

                    <div className="relative">
                         <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden lg:block"></div>

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className="relative pl-0 lg:pl-24"
                                >
                                     <div className="absolute left-6 top-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-black hidden lg:block"></div>

                                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 group">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-2xl rounded-2xl mb-4 md:mb-0">
                                                {milestone.year}
                                            </span>
                                            <h4 className="text-2xl font-semibold text-white">{milestone.title}</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </section >
    );
}
