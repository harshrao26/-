'use client';

import {
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Target,
  FileText
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Cloud Computing & Infrastructure',
      description: 'Cloud setup & migration (AWS, Azure, GCP), DevOps, CI/CD, Docker, Kubernetes, and cloud security & monitoring.',
      gradient: 'from-blue-600 to-indigo-600',
      glowColor: 'rgba(79, 70, 229, 0.3)',
    },
    {
      icon: Shield,
      title: 'Application Development & SaaS',
      description: 'Mobile app development, SaaS product development, enterprise software solutions, and API integration.',
      gradient: 'from-purple-600 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      icon: Clock,
      title: 'Web & Web Application Development',
      description: 'Corporate websites, e-commerce development, dashboards & web portals, and full stack solutions (React, Node, PHP, Python, .NET).',
      gradient: 'from-cyan-600 to-blue-600',
      glowColor: 'rgba(34, 211, 238, 0.3)',
    },
    {
      icon: TrendingUp,
      title: 'Cybersecurity Services',
      description: 'VAPT, network & endpoint security, SOC advisory & monitoring support, and ISO 27001 / GDPR / HIPAA compliance.',
      gradient: 'from-emerald-600 to-teal-600',
      glowColor: 'rgba(16, 185, 129, 0.3)',
    },
    {
      icon: Users,
      title: 'IT Consulting & Managed Services',
      description: 'IT strategy & digital transformation, IT outsourcing / resource augmentation, infrastructure setup, and system integration.',
      gradient: 'from-orange-600 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.3)',
    },
    {
      icon: Award,
      title: 'UI/UX Design (User Experience Design)',
      description: 'UX research, wireframing & prototyping, and app & web interface design for exceptional user experiences.',
      gradient: 'from-violet-600 to-purple-600',
      glowColor: 'rgba(139, 92, 246, 0.3)',
    },
    {
      icon: Lightbulb,
      title: 'Software Testing (Manual & Automation)',
      description: 'Manual testing, automation testing, performance testing, and comprehensive QA documentation.',
      gradient: 'from-yellow-600 to-orange-600',
      glowColor: 'rgba(234, 179, 8, 0.3)',
    },
    {
      icon: Target,
      title: 'Training & Corporate Upskilling',
      description: 'Training via VEXALIX Academy: Cybersecurity, Cloud & DevOps, Project Management (PMP, PRINCE2), and ISO Auditor Training.',
      gradient: 'from-rose-600 to-pink-600',
      glowColor: 'rgba(244, 63, 94, 0.3)',
    },
    {
      icon: FileText,
      title: 'Translation & Documentation',
      description: 'Policy Writing, Technical Documentation, Multi-Language Translation, User Manuals, and API Documentation.',
      gradient: 'from-indigo-600 to-blue-600',
      glowColor: 'rgba(79, 70, 229, 0.3)',
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-white mb-8"></div>
          <h2 className="text-heading-lg md:text-display-sm text-white mb-6 leading-none tracking-tight">
            Why Choose
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Our Services
            </span>
          </h2>
          <p className="text-body-lg text-gray-400 max-w-2xl">
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </p>
        </div>

        {/* Features Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{ background: feature.glowColor }}
              ></div>

              {/* Content */}
              <div className="relative flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-heading-sm text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-body text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-sm`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
    </section>
  );
}
