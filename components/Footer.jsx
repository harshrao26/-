'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function FooterV3() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Cloud Computing',
    'App Development',
    'Web Development',
    'Cybersecurity',
    'IT Consulting',
    'Software Testing',
    'UI/UX Design',
    'Training',
    'Translation',
  ];

  const company = [
    'About Us',

  ];

  const resources = [
    'Documentation',
    'Support',
    'FAQ',
    'Privacy Policy',
    'Terms of Service',
    'Contact',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                ⚡
              </div>
              <span className="text-heading-sm text-white">VexaLix Technology</span>
            </div>
            <p className="text-body text-gray-400 leading-relaxed mb-8">
              Delivering technology, security, cloud, and consulting solutions to global clients.
            </p>


          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h5 className="text-white text-heading-xs mb-6">Services</h5>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href="#" className="text-body-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 className="text-white text-heading-xs mb-6">Company</h5>
                <ul className="space-y-4">
                  {company.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-body-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h5 className="text-white text-heading-xs mb-6">Contact</h5>
                <a href="mailto:vexalixacademy@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 mt-0.5 text-blue-500 group-hover:text-blue-400" />
                  <span className="text-body-sm">vexalixacademy@gmail.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 mt-0.5 text-blue-500 group-hover:text-blue-400" />
                  <span className="text-body-sm">+91 98765 43210</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 text-blue-500" />
                  <span className="text-body-sm">Bangalore, India</span>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h5 className="text-white text-label-sm mb-4">Follow Us</h5>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.name}
                        className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-800 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-body-sm text-gray-500">
              © {currentYear} VexaLix Technology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-body-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
