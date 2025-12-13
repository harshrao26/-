"use client";

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
} from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      tagline: "Crafting Digital Experiences",
      description:
        "Build powerful, scalable web applications that drive business growth and deliver exceptional user experiences.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Content Management Systems",
        "Responsive Design Implementation",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      pricing: "Starting from $5,000",
      deliveryTime: "4-12 weeks",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      tagline: "Scale Without Limits",
      description:
        "Migrate, optimize, and manage your infrastructure with cutting-edge cloud technologies for maximum efficiency.",
      features: [
        "Cloud Migration Services",
        "Infrastructure as Code",
        "DevOps & CI/CD Pipeline",
        "Kubernetes & Container Orchestration",
        "Cloud Security & Compliance",
        "Cost Optimization & Monitoring",
      ],
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      gradient: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-500/10 to-blue-500/10",
      pricing: "Starting from $8,000",
      deliveryTime: "6-16 weeks",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      tagline: "Protect Your Digital Assets",
      description:
        "Comprehensive security solutions to safeguard your business from evolving cyber threats and vulnerabilities.",
      features: [
        "Security Audits & Assessment",
        "Penetration Testing",
        "Threat Detection & Response",
        "Compliance Management (GDPR, SOC2)",
        "Security Training & Awareness",
        "24/7 Security Monitoring",
      ],
      technologies: ["SIEM", "Firewall", "VPN", "IDS/IPS", "Encryption", "IAM"],
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 to-orange-500/10",
      pricing: "Starting from $6,000",
      deliveryTime: "2-8 weeks",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      tagline: "Apps That Users Love",
      description:
        "Create stunning mobile applications for iOS and Android that engage users and drive business results.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Development",
        "App UI/UX Design",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Maintenance & Support",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "GraphQL",
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      pricing: "Starting from $10,000",
      deliveryTime: "8-20 weeks",
    },
    {
      icon: Database,
      title: "Data Analytics",
      tagline: "Turn Data Into Insights",
      description:
        "Harness the power of your data with advanced analytics, visualization, and business intelligence solutions.",
      features: [
        "Business Intelligence Dashboards",
        "Data Warehousing",
        "Predictive Analytics",
        "Real-time Data Processing",
        "Custom Reporting Solutions",
        "Data Migration & Integration",
      ],
      technologies: [
        "Power BI",
        "Tableau",
        "Python",
        "R",
        "Apache Spark",
        "Snowflake",
      ],
      gradient: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-500/10 to-blue-500/10",
      pricing: "Starting from $7,000",
      deliveryTime: "6-14 weeks",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      tagline: "Intelligent Automation",
      description:
        "Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.",
      features: [
        "Custom ML Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems",
        "Chatbots & Virtual Assistants",
        "AI Strategy Consulting",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "OpenAI",
        "Hugging Face",
        "LangChain",
      ],
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      pricing: "Starting from $12,000",
      deliveryTime: "10-24 weeks",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, challenges, and requirements through in-depth consultations.",
      icon: Briefcase,
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team creates detailed designs and system architecture tailored to your specific needs.",
      icon: Layers,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodologies with continuous testing and quality assurance.",
      icon: Settings,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution seamlessly and provide ongoing support to ensure optimal performance.",
      icon: Zap,
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "Work with a team that has delivered 1000+ projects worldwide",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security and compliance with industry standards",
    },
    {
      icon: LineChart,
      title: "Proven Results",
      description:
        "98% client satisfaction rate and measurable business impact",
    },
    {
      icon: Monitor,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-white mb-8"></div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
            Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Comprehensive technology solutions designed to transform your
            business. From strategy to execution, we deliver excellence at every
            step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveService(index)}
              className={`group cursor-pointer bg-zinc-900 border-2 rounded-3xl p-8 transition-all duration-500 ${
                activeService === index
                  ? "border-white lg:col-span-2 lg:row-span-2"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white mb-2">
                {service.title}
              </h3>
              <p
                className={`text-sm font-semibold mb-4 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}
              >
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
                    <h4 className="text-white font-bold mb-4">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black border border-zinc-700 rounded-lg text-xs text-gray-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                      <div className="text-gray-500 text-xs mb-1">Pricing</div>
                      <div className="text-white font-bold">
                        {service.pricing}
                      </div>
                    </div>
                    <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                      <div className="text-gray-500 text-xs mb-1">Timeline</div>
                      <div className="text-white font-bold">
                        {service.deliveryTime}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Minimized view */}
              {activeService !== index && (
                <p className="text-gray-500 text-sm">Click to learn more</p>
              )}
            </div>
          ))}
        </div>

        {/* Our Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">
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
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4">
                  {item.step}
                </div>

                <div className="inline-flex w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-500 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400">
              The advantages that set us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-500 text-center group"
              >
                <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/20 border border-blue-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our
            expert services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/5 transition-all duration-300">
              View Case Studies
            </button>
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
