'use client';

import { ArrowRight, Mail, Phone, MessageCircle, Check } from 'lucide-react';
import Link from 'next/link';

export default function CTAV4() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Dots Pattern Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            {/* Gradient Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#833DFA]/20 to-[#833DFA]/20 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#833DFA]/20 to-orange-100 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content */}
                <div className="text-center mb-16">
                    <h2 className="text-heading-xl md:text-display-sm text-gray-900 mb-6 leading-tight">
                        Ready to Transform
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833DFA] via-[#833DFA] to-[#833DFA]">
                            Your Business?
                        </span>
                    </h2>
                    <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Let's discuss how our IT solutions can help you achieve your business goals.
                        Get started with a free consultation today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link href="/contact" className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-button-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full text-button-lg border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            Our Services
                        </Link>
                    </div>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: Mail,
                            label: 'Email Us',
                            value: 'info@vexalixtechnology.com',
                            gradient: 'from-[#833DFA] to-cyan-500',
                            bgGradient: 'from-[#833DFA]/20 to-cyan-50',
                        },
                        {
                            icon: Phone,
                            label: 'Call Us',
                            value: '+91 88879 46496',
                            gradient: 'from-[#833DFA] to-[#833DFA]',
                            bgGradient: 'from-[#833DFA]/20 to-[#833DFA]/20',
                        },
                        {
                            icon: MessageCircle,
                            label: 'Live Chat',
                            value: 'Available 24/7',
                            gradient: 'from-emerald-500 to-teal-500',
                            bgGradient: 'from-emerald-50 to-teal-50',
                        },
                    ].map((contact, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br ${contact.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-white cursor-pointer`}
                        >
                            <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-2xl items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                                <contact.icon className="w-7 h-7 text-white" strokeWidth={2} />
                            </div>
                            <div className="text-label-sm text-gray-500 mb-2">
                                {contact.label}
                            </div>
                            <div className="text-body-lg text-gray-900">
                                {contact.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8 md:p-12">
                    <h3 className="text-heading-sm text-gray-900 mb-8 text-center">
                        What You Get
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'Free initial consultation',
                            'No credit card required',
                            'Custom solutions tailored to you',
                            'Expert team with 15+ years experience',
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-body-lg text-gray-700">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
