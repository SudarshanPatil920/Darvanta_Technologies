import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function SaaSProductsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SaaS Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Scalable, multi-tenant SaaS platforms built for rapid growth.
              From MVP to enterprise-scale with modern cloud architecture.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Multi-tenancy', desc: 'Secure isolation with shared infrastructure' },
              { title: 'Subscription Billing', desc: 'Stripe, Recurly, Chargebee integration' },
              { title: 'Analytics', desc: 'User behavior, retention, and revenue metrics' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}