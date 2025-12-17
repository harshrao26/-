'use client';

import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    Linkedin,
    Twitter,
    Github,
    Facebook,
    Instagram,
    MessageSquare,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: '',
            });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            details: 'vexalixacademy@gmail.com',
            link: 'mailto:vexalixacademy@gmail.com',
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: '+91 88879 46496',
            link: 'tel:+918887946496',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            details: 'Delhi, India',
            link: 'https://maps.google.com',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            details: 'Mon - Fri: 9:00 AM - 6:00 PM',
            link: null,
        },
    ];

    const socialLinks = [
        { icon: Linkedin, link: '#', name: 'LinkedIn' },
        { icon: Twitter, link: '#', name: 'Twitter' },
        { icon: Github, link: '#', name: 'Github' },
        { icon: Facebook, link: '#', name: 'Facebook' },
        { icon: Instagram, link: '#', name: 'Instagram' },
    ];

    const services = [
        'Cloud Computing & Infrastructure',
        'Application Development',
        'Web & Web App Development',
        'Cybersecurity Services',
        'IT Consulting & Managed Services',
        'Software Testing',
        'UI/UX Design',
        'Training & Corporate Upskilling',
        'Translation & Documentation',
    ];

    return (
        <section className="relative">
            {/* SLIDE 1 - BLACK BACKGROUND */}
            <div className="relative bg-black overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

                {/* Gradient Orbs */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00d0ff]/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00d0ff]/20 rounded-full blur-[120px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                                <MessageSquare className="w-4 h-4 text-[#00d0ff]" />
                                <span className="font-semibold text-gray-300">Get In Touch</span>
                            </div>

                            <h1 className="font-semibold text-white mb-6 leading-none">
                                Let's Start a
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0ff] via-[#00d0ff] to-[#00d0ff]">
                                    Conversation
                                </span>
                            </h1>

                            <p className="text-gray-400 mb-12 leading-relaxed">
                                Have a project in mind? We'd love to hear about it.
                                Fill out the form and we'll get back to you within 24 hours.
                            </p>

                            {/* Contact Info Cards */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link || '#'}
                                        className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00d0ff]/50 transition-all duration-300"
                                    >
                                        <item.icon className="w-6 h-6 text-[#00d0ff] mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-gray-500 mb-1" style={{ fontSize: '0.875rem' }}>{item.title}</div>
                                        <div className="text-white font-semibold">{item.details}</div>
                                    </a>
                                ))}
                            </div>


                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                            <h3 className="font-semibold text-white mb-6">Send us a message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-medium text-gray-400 mb-2" style={{ fontSize: '0.875rem' }}>
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00d0ff] transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00d0ff] transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-medium text-gray-400 mb-2" style={{ fontSize: '0.875rem' }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00d0ff] transition-colors"
                                            placeholder="+91 98765 00000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00d0ff] transition-colors"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#00d0ff] transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00d0ff] transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-orange-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {submitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </>
                                    ) : isSubmitting ? (
                                        <>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
