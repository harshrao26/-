'use client';

import {
    Code,
    Cloud,
    Shield,
    Smartphone,
    Database,
    Cpu,
    ArrowRight,
    Check,
    Zap,
    Globe,
    LineChart,
    Lock,
    Layers,
    Monitor,
    Settings,
    Briefcase,
    FileText,
    GraduationCap,
    PenTool,
    ClipboardCheck
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ServicesPage() {
    const searchParams = useSearchParams();
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: Cloud,
            title: 'Cloud Computing & Infrastructure',
            tagline: 'Scale Without Limits',
            description: 'Comprehensive cloud solutions including setup, migration, and management for AWS, Azure, and GCP.',
            features: [
                'Cloud Setup & Migration (AWS, Azure, GCP)',
                'DevOps, CI/CD, Docker, Kubernetes',
                'Cloud Security & Monitoring',
                'Backup & Disaster Recovery',
                'Infrastructure as Code',
                'Cost Optimization',
            ],
            technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
            gradient: 'from-[#833DFA] to-cyan-500',
            bgGradient: 'from-[#833DFA]/10 to-cyan-500/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'cloud-computing-infrastructure',
        },
        {
            icon: Smartphone,
            title: 'Application Development',
            tagline: 'Innovative App Solutions',
            description: 'End-to-end application development services including mobile apps, SaaS products, and enterprise solutions.',
            features: [
                'Mobile App Development',
                'SaaS Product Development',
                'Enterprise Software Solutions',
                'API Integration',
                'Cross-Platform Development',
                'Maintenance & Support',
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'GraphQL'],
            gradient: 'from-[#833DFA] to-[#833DFA]',
            bgGradient: 'from-[#833DFA]/10 to-[#833DFA]/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'application-development',
        },
        {
            icon: Code,
            title: 'Web & Web App Development',
            tagline: 'Crafting Digital Experiences',
            description: 'Build powerful, scalable web applications, corporate websites, and dashboards that drive business growth.',
            features: [
                'Corporate Websites',
                'E-commerce Development',
                'Dashboards & Web Portals',
                'Full Stack Solutions',
                'CMS Development',
                'PWA Development',
            ],
            technologies: ['React', 'Node.js', 'PHP', 'Python', '.NET', 'Next.js'],
            gradient: 'from-emerald-500 to-teal-500',
            bgGradient: 'from-emerald-500/10 to-teal-500/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'web-development',
        },
        {
            icon: Shield,
            title: 'Cybersecurity Services',
            tagline: 'Protect Your Digital Assets',
            description: 'Comprehensive security solutions to safeguard your business from evolving cyber threats and vulnerabilities.',
            features: [
                'VAPT (Vulnerability Assessment)',
                'Network & Endpoint Security',
                'SOC Advisory & Monitoring Support',
                'ISO 27001 / GDPR / HIPAA Compliance',
                'Security Audits',
                'Threat Detection',
            ],
            technologies: ['SIEM', 'Firewall', 'VPN', 'IDS/IPS', 'Encryption', 'IAM'],
            gradient: 'from-red-500 to-orange-500',
            bgGradient: 'from-red-500/10 to-orange-500/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'cybersecurity-services',
        },
        {
            icon: Briefcase,
            title: 'IT Consulting & Managed Services',
            tagline: 'Strategic IT Partnership',
            description: 'Expert IT strategy, digital transformation, and managed services to optimize your business operations.',
            features: [
                'IT Strategy & Digital Transformation',
                'IT Outsourcing / Resource Augmentation',
                'Infrastructure Setup',
                'System Integration',
                'Technology Roadmap',
                'Process Optimization',
            ],
            technologies: ['Agile', 'Scrum', 'ITIL', 'Cloud Strategy', 'Digital Ops'],
            gradient: 'from-[#833DFA] to-[#833DFA]',
            bgGradient: 'from-[#833DFA]/10 to-[#833DFA]/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Ongoing',
            slug: 'it-consulting-managed-services',
        },
        {
            icon: ClipboardCheck,
            title: 'Software Testing',
            tagline: 'Quality Assurance',
            description: ' rigorous testing services to ensure your software is bug-free, reliable, and performs optimally.',
            features: [
                'Manual Testing',
                'Automation Testing',
                'Performance Testing',
                'QA Documentation',
                'Security Testing',
                'Usability Testing',
            ],
            technologies: ['Selenium', 'JMeter', 'Cypress', 'Appium', 'Postman'],
            gradient: 'from-yellow-500 to-orange-500',
            bgGradient: 'from-yellow-500/10 to-orange-500/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'software-testing',
        },
        {
            icon: PenTool,
            title: 'UI/UX Design',
            tagline: 'User-Centric Design',
            description: 'Create intuitive and engaging user interfaces and experiences for web and mobile applications.',
            features: [
                'UX Research',
                'Wireframing & Prototyping',
                'App & Web Interface Design',
                'User Journey Mapping',
                'Visual Design',
                'Usability Testing',
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
            gradient: 'from-[#833DFA] to-rose-500',
            bgGradient: 'from-[#833DFA]/10 to-rose-500/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'ui-ux-design',
        },
        {
            icon: GraduationCap,
            title: 'Training & Corporate Upskilling',
            tagline: 'VEXALIX Academy',
            description: 'Professional training programs to upskill your team in the latest technologies and methodologies.',
            features: [
                'Cybersecurity Training',
                'Cloud & DevOps',
                'Project Management (PMP, PRINCE2)',
                'ISO Auditor Training',
                'Corporate Workshops',
                'Certification Prep',
            ],
            technologies: ['AWS Certified', 'PMP', 'CISSP', 'Scrum Master'],
            gradient: 'from-cyan-500 to-[#833DFA]',
            bgGradient: 'from-cyan-500/10 to-[#833DFA]/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Course Based',
            slug: 'training-corporate-upskilling',
        },
        {
            icon: FileText,
            title: 'Translation & Documentation',
            tagline: 'Global Communication',
            description: 'Professional documentation and translation services to help you reach a global audience.',
            features: [
                'Policy Writing',
                'Technical Documentation',
                'Multi-Language Translation',
                'User Manuals',
                'API Documentation',
                'Localization',
            ],
            technologies: ['CAT Tools', 'Markdown', 'LaTeX', 'CMS'],
            gradient: 'from-indigo-500 to-[#833DFA]',
            bgGradient: 'from-indigo-500/10 to-[#833DFA]/10',
            pricing: 'Custom Quote',
            deliveryTime: 'Project Based',
            slug: 'translation-documentation',
        },
    ];

    // Auto-select service based on URL parameter
    useEffect(() => {
        const serviceSlug = searchParams.get('service');
        if (serviceSlug) {
            const serviceIndex = services.findIndex(s => s.slug === serviceSlug);
            if (serviceIndex !== -1) {
                setActiveService(serviceIndex);
                // Scroll to services section after a brief delay
                setTimeout(() => {
                    const servicesSection = document.getElementById('services-grid');
                    if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }
    }, [searchParams]);

    const process = [
        {
            step: '01',
            title: 'Discovery & Planning',
            description: 'We start by understanding your business goals, challenges, and requirements through in-depth consultations.',
            icon: Briefcase,
        },
        {
            step: '02',
            title: 'Design & Architecture',
            description: 'Our team creates detailed designs and system architecture tailored to your specific needs.',
            icon: Layers,
        },
        {
            step: '03',
            title: 'Development & Testing',
            description: 'We build your solution using agile methodologies with continuous testing and quality assurance.',
            icon: Settings,
        },
        {
            step: '04',
            title: 'Deployment & Support',
            description: 'We deploy your solution seamlessly and provide ongoing support to ensure optimal performance.',
            icon: Zap,
        },
    ];

    const benefits = [
        {
            icon: Globe,
            title: 'Global Expertise',
            description: 'Work with a team that has delivered 1000+ projects worldwide',
        },
        {
            icon: Lock,
            title: 'Enterprise Security',
            description: 'Bank-level security and compliance with industry standards',
        },
        {
            icon: LineChart,
            title: 'Proven Results',
            description: '98% client satisfaction rate and measurable business impact',
        },
        {
            icon: Monitor,
            title: '24/7 Support',
            description: 'Round-the-clock technical support and maintenance',
        },
    ];

    return (
        <section className="relative bg-black overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

            {/* Gradient Accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#833DFA]/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#833DFA]/10 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="mb-20">
                    <div className="w-16 h-1 bg-white mb-8"></div>
                    <h1 className="font-semibold text-white mb-6 leading-none tracking-tight">
                        Our
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833DFA] via-[#833DFA] to-[#833DFA]">
                            Services
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl leading-relaxed">
                        Comprehensive technology solutions designed to transform your business.
                        From strategy to execution, we deliver excellence at every step.
                    </p>
                </div>

                {/* Services Grid */}
                <div id="services-grid" className="grid lg:grid-cols-3 gap-6 mb-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveService(index)}
                            className={`group cursor-pointer bg-zinc-900 border-2 rounded-3xl p-8 transition-all duration-500 ${activeService === index
                                ? 'border-white lg:col-span-2 lg:row-span-2'
                                : 'border-zinc-800 hover:border-zinc-700'
                                }`}
                        >
                            {/* Icon */}
                            <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                            <p className={`font-semibold mb-4 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`} style={{ fontSize: '0.875rem' }}>
                                {service.tagline}
                            </p>

                            {/* Description - Only show in active state */}
                            {activeService === index && (
                                <div className="animate-fade-in">
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-black border border-zinc-700 rounded-lg text-gray-300 font-medium" style={{ fontSize: '0.75rem' }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing & Timeline */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                                            <div className="text-gray-500" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Pricing</div>
                                            <div className="text-white font-semibold">{service.pricing}</div>
                                        </div>
                                        <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                                            <div className="text-gray-500" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Timeline</div>
                                            <div className="text-white font-semibold">{service.deliveryTime}</div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link href="/contact" className="block">
                                        <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-orange-500/50">
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div>
                            )}

                            {/* Minimized view */}
                            {activeService !== index && (
                                <p className="text-gray-500">Click to learn more</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Our Process */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="font-semibold text-white mb-4">Our Process</h2>
                        <p className="text-gray-400">
                            A proven methodology that ensures project success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 group"
                            >
                                {/* Step Number */}
                                <div className="font-semibold text-white/5 absolute top-4 right-4" style={{ fontSize: '3.75rem' }}>
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#833DFA] to-[#833DFA] rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="font-semibold text-white mb-4">Why Choose Us</h2>
                        <p className="text-gray-400">
                            The advantages that set us apart
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 text-center group"
                            >
                                <benefit.icon className="w-12 h-12 text-[#833DFA] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

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
        </section>
    );
}
