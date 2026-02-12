import { useEffect } from 'react';
import { ContactCTA } from '../sections/ContactCTA';

export function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Engineering insights, technology trends, and best practices from our team of senior architects.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Building Enterprise Microservices', author: 'Alexander Chen', date: 'Feb 15, 2024' },
              { title: 'ROI of Enterprise UX', author: 'Sarah Williams', date: 'Feb 10, 2024' },
              { title: 'AI in Healthcare Production', author: 'Dr. James Liu', date: 'Feb 5, 2024' },
              { title: 'Cloud Cost Optimization', author: 'Michael Rodriguez', date: 'Jan 28, 2024' },
              { title: 'WebAssembly in Enterprise', author: 'Priya Patel', date: 'Jan 20, 2024' },
              { title: 'Zero Trust Implementation', author: 'David Kim', date: 'Jan 15, 2024' }
            ].map((post, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-sm text-[#0A5C4E] font-semibold">{post.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600">By {post.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}