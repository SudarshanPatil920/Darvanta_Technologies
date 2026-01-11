// Services.jsx
import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Cpu,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications and platforms built with modern frameworks like React, Next.js, and Vue.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
      color: "from-blue-500 to-cyan-500",
      delay: "100"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android"],
      color: "from-purple-500 to-pink-500",
      delay: "200"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and DevOps automation for modern businesses.",
      features: ["AWS/Azure/GCP", "Microservices", "Containerization"],
      color: "from-green-500 to-emerald-500",
      delay: "300"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence to automate and optimize business processes.",
      features: ["Predictive Analytics", "Computer Vision", "NLP"],
      color: "from-orange-500 to-red-500",
      delay: "400"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions and compliance management for regulated industries.",
      features: ["Penetration Testing", "GDPR Compliance", "SOC2 Audit"],
      color: "from-indigo-500 to-blue-600",
      delay: "500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize legacy systems and processes.",
      features: ["Process Automation", "System Integration", "Legacy Modernization"],
      color: "from-yellow-500 to-orange-500",
      delay: "600"
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="block">Comprehensive</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            End-to-end software solutions tailored to your business needs, 
            from initial concept to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-gray-100 to-white text-gray-700 font-semibold rounded-xl border border-gray-300 group-hover:border-blue-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                  Explore Service
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts and get a custom 
            proposal tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300">
              Book a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;