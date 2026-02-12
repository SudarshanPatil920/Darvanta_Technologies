import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function TermsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Terms and conditions for using our services.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">By accessing our services, you agree to be bound by these terms.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-8">We provide enterprise software development and IT consulting services as described in our proposals.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-8">You retain ownership of your intellectual property. We retain ownership of our pre-existing IP.</p>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}