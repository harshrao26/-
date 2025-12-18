'use client';

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialsV3() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: '👩‍💼',
      rating: 5,
      text: 'Their cloud migration service transformed our business. We reduced costs by 40% and improved our system performance dramatically.',
      color: 'from-[#833DFA] to-cyan-500',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Inc',
      image: '👨‍💻',
      rating: 5,
      text: 'The cybersecurity audit revealed critical vulnerabilities. Their team fixed everything and now we sleep better at night.',
      color: 'from-[#833DFA] to-[#833DFA]',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, GlobalRetail',
      image: '👩‍💼',
      rating: 5,
      text: 'We needed a custom software solution and they delivered beyond expectations. The app streamlined our entire workflow.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'David Kim',
      role: 'Founder, StartupHub',
      image: '👨‍💼',
      rating: 5,
      text: 'Outstanding 24/7 support! Whenever we had an issue, their team was there immediately. True partners in our growth.',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Lisa Anderson',
      role: 'VP Engineering, InnovateLabs',
      image: '👩‍💼',
      rating: 5,
      text: 'Their AI and ML solutions helped us automate processes we thought would take years. ROI was visible within months.',
      color: 'from-[#833DFA] to-[#833DFA]',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#833DFA]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#833DFA]/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-white mb-8"></div>
          <h2 className="text-heading-xl md:text-display text-white mb-6 leading-none tracking-tight">
            Client
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833DFA] via-[#833DFA] to-[#833DFA]">
              Testimonials
            </span>
          </h2>
          <p className="text-body-lg text-gray-400 max-w-2xl">
            Hear from businesses who transformed their operations with our solutions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-12 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 group">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-24 h-24 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl  text-white font-medium leading-relaxed mb-12 relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">

                      <div>
                        <div className="text-heading-sm text-white mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-body text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.color} opacity-10 blur-sm`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'w-12 bg-white'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
