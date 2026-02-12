import { useEffect } from 'react';
import { About } from '../sections/About';
import { ContactCTA } from '../sections/ContactCTA';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section with Animation */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Darvanta Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Founded in 2015, we've grown from a boutique engineering shop to a global 
              technology partner for the world's most ambitious organizations.
            </p>
          </div>
        </div>
      </div>

      {/* About Section with Animation */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150">
        <About />
      </div>
      
      {/* Mission & Approach Section with Animation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Mission - Animated individually */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our mission</h2>
                <p className="text-gray-600">
                  To deliver software excellence that enables our clients to focus on what matters most: 
                  their customers, their growth, and their future. We believe technology should be reliable, 
                  secure, and invisible—working flawlessly so business can thrive.
                </p>
              </div>
              
              {/* Approach - Animated individually */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our approach</h2>
                <p className="text-gray-600">
                  We combine technical depth with strategic partnership. Every engagement begins with 
                  discovery and architecture, followed by iterative delivery with enterprise-grade quality 
                  assurance. We don't hand off documentation—we embed with your teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Animation */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-400">
        <ContactCTA />
      </div>
    </>
  );
}