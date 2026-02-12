import { useEffect } from 'react';
import { Services } from '../sections/Services';
import { ContactCTA } from '../sections/ContactCTA';

export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Add animate-in classes here */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Add animation to heading */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise software services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Comprehensive technical capabilities delivered with Fortune 500 rigor.
            </p>
          </div>
        </div>
      </div>
      
      {/* Add animation to sections with delay */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150">
        <Services />
      </div>
      
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300">
        <ContactCTA />
      </div>
    </>
  );
}