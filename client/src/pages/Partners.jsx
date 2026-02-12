import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function PartnersPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Strategic partnerships with leading technology companies to deliver exceptional solutions.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              'AWS', 'Microsoft', 'Google', 'Salesforce',
              'MongoDB', 'Datadog', 'Auth0', 'Stripe'
            ].map((partner, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="text-xl font-bold text-gray-900">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}