'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Training', href: 'https://www.vexalixacademy.in/' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-xl'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="VexaLix Technology Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#833DFA] group-hover:to-[#833DFA] transition-all">
              VexaLix Technology
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="relative px-5 py-2.5 text-gray-300 hover:text-white text-body-sm transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#833DFA] to-[#833DFA] group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link href='/contact' className="hidden md:block">
            <button className="group relative px-6 py-2.5 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-white rounded-full text-button hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#833DFA]/50 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-out ${isOpen
        ? 'max-h-screen opacity-100'
        : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
        <div className="bg-black/95 backdrop-blur-2xl border-t border-white/10 px-4 py-6 space-y-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-gray-300 hover:text-white text-button transition-all duration-300 border border-white/5 hover:border-[#833DFA]/50"
            >
              {item.name}
            </a>
          ))}
          <a href='/contact' className="w-full px-5 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl text-button hover:scale-[1.02] transition-all duration-300 shadow-lg">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
