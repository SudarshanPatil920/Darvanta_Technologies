import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 dark-selection">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <img src="/logo.png" alt="Darvanta Technologies" className="h-9 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight text-white">
                  Darvanta<span className="text-[#0A5C4E]">.</span>
                </span>
                <span className="text-[10px] font-medium text-gray-400 tracking-wider uppercase -mt-1">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              Enterprise software solutions trusted by global organizations. We engineer the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center md:justify-start">
              <a
                href="mailto:info@darvantatech.com"
                className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@darvantatech.com
              </a>
              <a
                href="https://www.darvantatech.com"
                className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                darvantatech.com
              </a>
            </div>
          </div>

          {/* Services - Mobile Horizontal */}
          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-wrap justify-center md:flex-col gap-3 md:gap-3">
              {[
                { name: 'Web Development', path: '/web-development' },
                { name: 'Mobile Applications', path: '/mobile-applications' },
                { name: 'Cloud Solutions', path: '/cloud-solutions' },
                { name: 'AI/ML', path: '/ai-ml' },
                { name: 'DevOps', path: '/devops' },
                { name: 'UI/UX', path: '/ui-ux' },
                { name: 'SaaS Products', path: '/saas-products' },
                { name: 'Enterprise Software', path: '/enterprise-software' }
              ].map((item) => (
                <li key={item.name} className="inline-block md:block">
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors px-2 md:px-0"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="flex flex-wrap justify-center md:flex-col gap-3 md:gap-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Newsroom', path: '/newsroom' },
                { name: 'Partners', path: '/partners' },
                { name: 'Blog', path: '/blog' }
              ].map((item) => (
                <li key={item.name} className="inline-block md:block">
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors px-2 md:px-0"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="flex flex-wrap justify-center md:flex-col gap-3 md:gap-3">
              {[
                { name: 'Privacy', path: '/privacy' },
                { name: 'Terms', path: '/terms' },
                { name: 'Security', path: '/security' },
                { name: 'Compliance', path: '/compliance' },
                { name: 'Sitemap', path: '/sitemap' }
              ].map((item) => (
                <li key={item.name} className="inline-block md:block">
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors px-2 md:px-0"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 order-2 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} Darvanta Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6 order-1 md:order-2">
              <a
                href="https://www.darvantatech.com"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                darvantatech.com
              </a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a
                href="mailto:info@darvantatech.com"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                info@darvantatech.com
              </a>
            </div>
          </div>

          {/* Trust badges - Mobile Horizontal */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <span className="text-xs text-gray-500 px-2">Security-first engineering</span>
            <span className="text-xs text-gray-500 px-2">Privacy-aware development</span>
            <span className="text-xs text-gray-500 px-2">Enterprise-grade best practices</span>
            <span className="text-xs text-gray-500 px-2">Compliance-ready architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}