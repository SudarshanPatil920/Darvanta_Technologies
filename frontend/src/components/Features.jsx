// Features.jsx
import React from 'react';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Users, 
  Lock,
  ArrowRight 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast Performance",
      description: "Optimized software architecture delivering sub-second response times and superior user experiences.",
      color: "from-yellow-500 to-orange-500",
      delay: "100"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols with end-to-end encryption and compliance certifications.",
      color: "from-green-500 to-emerald-600",
      delay: "200"
    },
    {
      icon: Cloud,
      title: "Cloud Native Architecture",
      description: "Built for scalability and global availability on AWS, Azure, and Google Cloud platforms.",
      color: "from-blue-500 to-cyan-500",
      delay: "300"
    },
    {
      icon: Cpu,
      title: "AI-Powered Automation",
      description: "Intelligent systems that learn and adapt to optimize your business processes automatically.",
      color: "from-purple-500 to-pink-500",
      delay: "400"
    },
    {
      icon: Users,
      title: "Team Collaboration Tools",
      description: "Real-time collaboration features that enhance productivity across distributed teams.",
      color: "from-red-500 to-pink-500",
      delay: "500"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Fully compliant with GDPR, HIPAA, SOC2, and other industry-specific regulations.",
      color: "from-indigo-500 to-blue-600",
      delay: "600"
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="block">Built for</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Modern Demands
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We combine cutting-edge technology with industry expertise to deliver 
            solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <a 
                  href="#learn-more" 
                  className="inline-flex items-center text-blue-600 font-semibold group/link"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
                
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
              { value: '50+', label: 'Expert Engineers' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;