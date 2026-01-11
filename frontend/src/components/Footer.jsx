// Footer.jsx
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send,
  ChevronRight
} from 'lucide-react';
import Logo from '../assets/Darvanta_Technologies.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      'Web Development',
      'Mobile Applications',
      'Cloud Solutions',
      'AI & Machine Learning',
      'UI/UX Design',
      'DevOps Services'
    ],
    Company: [
      'About Us',
      'Careers',
      'Case Studies',
      'Blog',
      'Press',
      'Contact'
    ]
  };

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'GDPR Compliance'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#facebook' },
    { icon: Twitter, label: 'Twitter', href: '#twitter' },
    { icon: Linkedin, label: 'LinkedIn', href: '#linkedin' },
    { icon: Instagram, label: 'Instagram', href: '#instagram' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Let's discuss your project and explore how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ChevronRight className="ml-3 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Horizontal on desktop, stacked on mobile */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Top Section: Logo & Contact - Horizontal on desktop */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12">
          {/* Logo & Description */}
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-3">
                <img 
                  src={Logo} 
                  alt="Darvanta Technologies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  Darvanta
                </span>
                <span className="text-lg md:text-xl font-semibold text-blue-300">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              We transform ideas into powerful digital solutions. Our team delivers exceptional results for clients worldwide.
            </p>
          </div>

          {/* Quick Links - Horizontal grid on desktop */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.Services.map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group text-lg"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.Company.map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group text-lg"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - Horizontal layout for icons */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">Contact Us</h3>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="font-medium text-lg">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-medium text-lg">contact@darvanta.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="font-medium text-lg">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Social Media & Newsletter - Horizontal on desktop */}
        <div className="py-8 border-t border-gray-800 border-b">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Media Links - Horizontal */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter - Horizontal on desktop */}
            <div className="flex-1 max-w-2xl w-full">
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Stay Updated</h3>
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal Links - Horizontal on desktop */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright with small logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src={Logo} 
                  alt="Darvanta Technologies Logo"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div className="text-gray-400 text-sm">
                © {currentYear} Darvanta Technologies. All rights reserved.
              </div>
            </div>

            {/* Legal Links - Horizontal on desktop, wrapped on mobile */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;