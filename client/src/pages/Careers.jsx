import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function CareersPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Careers at Darvanta
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Join our team of world-class engineers and innovators building the future of enterprise software.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Positions</h2>
          <div className="space-y-4">
            {[
              { title: 'Senior Full Stack Engineer', type: 'Remote • Full-time' },
              { title: 'Cloud Architect', type: 'Remote • Full-time' },
              { title: 'AI/ML Engineer', type: 'Remote • Full-time' },
              { title: 'DevOps Engineer', type: 'Remote • Full-time' }
            ].map((job, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-[#0A5C4E] mt-1">{job.type}</p>
                  </div>
                  <span className="text-[#0A5C4E] font-semibold">Apply →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}