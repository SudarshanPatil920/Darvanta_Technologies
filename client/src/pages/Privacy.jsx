import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              How we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-8">We collect information you provide directly to us, such as when you contact us, create an account, or use our services.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
            <p className="text-gray-600 mb-8">We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-8">We do not sell your personal information. We may share information with your consent or as required by law.</p>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}