'use client';

import {
    Code2, Cloud, Shield, Smartphone, Database, Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesV4() {
    const services = [
        {
            icon: Cloud,
            title: 'Cloud Computing & Infrastructure',
            description: 'Comprehensive cloud solutions for modern enterprises.',
            features: ['AWS, Azure, GCP Setup', 'DevOps, CI/CD, Docker', 'Cloud Security & Monitoring'],
            gradient: 'from-blue-50 to-indigo-50',
            iconColor: 'text-[#00d0ff]',
            dotColor: 'bg-[#00d0ff]',
            slug: 'cloud-computing-infrastructure',
        },
        {
            icon: Code2,
            title: 'Application Development',
            description: 'Custom applications built for your business needs.',
            features: ['Mobile Apps (iOS & Android)', 'SaaS Product Development', 'Enterprise Software Solutions'],
            gradient: 'from-blue-50 to-blue-50',
            iconColor: 'text-[#00d0ff]',
            dotColor: 'bg-[#00d0ff]',
            slug: 'application-development',
        },
        {
            icon: Database,
            title: 'Web Development',
            description: 'Modern web solutions for digital success.',
            features: ['Corporate Websites', 'E-commerce Development', 'Full Stack Solutions'],
            gradient: 'from-cyan-50 to-blue-50',
            iconColor: 'text-cyan-600',
            dotColor: 'bg-cyan-600',
            slug: 'web-development',
        },
        {
            icon: Shield,
            title: 'Cybersecurity Services',
            description: 'Protect your business with enterprise security.',
            features: ['VAPT & Penetration Testing', 'Network & Endpoint Security', 'ISO 27001 / GDPR / HIPAA'],
            gradient: 'from-emerald-50 to-teal-50',
            iconColor: 'text-emerald-600',
            dotColor: 'bg-emerald-600',
            slug: 'cybersecurity-services',
        },
        {
            icon: Cpu,
            title: 'IT Consulting & Managed Services',
            description: 'Strategic IT guidance and support.',
            features: ['IT Strategy & Digital Transformation', 'IT Outsourcing', 'Infrastructure Setup'],
            gradient: 'from-orange-50 to-yellow-50',
            iconColor: 'text-orange-600',
            dotColor: 'bg-orange-600',
            slug: 'it-consulting-managed-services',
        },
        {
            icon: Smartphone,
            title: 'Software Testing',
            description: 'Ensure quality and performance excellence.',
            features: ['Manual & Automation Testing', 'Performance Testing', 'QA Documentation'],
            gradient: 'from-blue-50 to-blue-50',
            iconColor: 'text-[#00d0ff]',
            dotColor: 'bg-[#00d0ff]',
            slug: 'software-testing',
        },
    ];

    return (
        <section className="min-h-screen bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-100 text-[#00d0ff] rounded-full text-label mb-6">
                        Our Services
                    </span>
                    <h2 className="text-heading-xl md:text-display-sm text-gray-900 mb-6 leading-tight">
                        Everything you need<br />to succeed digitally
                    </h2>
                    <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive suite of IT services designed for modern businesses
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services?service=${service.slug}`}
                            className={`group bg-gradient-to-br ${service.gradient} backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-white cursor-pointer`}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                                <service.icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={2} />
                            </div>

                            {/* Content */}
                            <h3 className="text-heading-sm text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-body text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-700 text-body-sm">
                                        <div className={`w-1.5 h-1.5 rounded-full ${service.dotColor}`}></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
