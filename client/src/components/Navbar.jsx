import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { useScrollTop } from '../hooks/useScrollTop';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const scrolled = useScrollTop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !isClosing) {
        const menu = document.getElementById('mobile-menu');
        const button = document.getElementById('mobile-menu-button');

        if (menu && !menu.contains(event.target) &&
          button && !button.contains(event.target)) {
          handleCloseMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen, isClosing]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setMobileMenuOpen(false);
    setTimeout(() => {
      setIsClosing(false);
    }, 300); // Match this with transition duration
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    handleCloseMenu();
    // Navigate after menu close animation
    setTimeout(() => {
      navigate(href);
    }, 200);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
        : 'bg-transparent py-6'
    )}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Full Company Name */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/Logo.png" alt="Darvanta Technologies" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-gray-900 leading-tight">
                Darvanta<span className="text-[#0A5C4E]">.</span>
              </span>
              <span className="text-[10px] font-medium text-gray-500 tracking-wider uppercase -mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" size="sm">Get in touch</Button>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden fixed left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-out',
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none',
            scrolled ? 'top-16' : 'top-20'
          )}
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-opacity duration-200"
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  opacity: isClosing ? 0.5 : 1,
                  transition: 'opacity 200ms ease-out'
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                href="/contact"
                className="w-full transition-opacity duration-200"
                onClick={(e) => handleLinkClick(e, '/contact')}
                style={{
                  opacity: isClosing ? 0.5 : 1
                }}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}