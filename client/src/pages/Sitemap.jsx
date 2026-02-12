import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCTA } from '../sections/ContactCTA';

export function SitemapPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Complete site structure and navigation.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Services</h2>
              <ul className="space-y-3">
                <li><Link to="/web-development" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Web Development</Link></li>
                <li><Link to="/mobile-applications" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Mobile Applications</Link></li>
                <li><Link to="/cloud-solutions" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Cloud Solutions</Link></li>
                <li><Link to="/ai-ml" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">AI/ML</Link></li>
                <li><Link to="/devops" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">DevOps</Link></li>
                <li><Link to="/ui-ux" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">UI/UX</Link></li>
                <li><Link to="/saas-products" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">SaaS Products</Link></li>
                <li><Link to="/enterprise-software" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Enterprise Software</Link></li>
              </ul>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Company</h2>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Careers</Link></li>
                <li><Link to="/newsroom" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Newsroom</Link></li>
                <li><Link to="/partners" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Partners</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Legal</h2>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Terms</Link></li>
                <li><Link to="/security" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Security</Link></li>
                <li><Link to="/compliance" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Compliance</Link></li>
                <li><Link to="/sitemap" className="text-gray-600 hover:text-[#0A5C4E] transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}