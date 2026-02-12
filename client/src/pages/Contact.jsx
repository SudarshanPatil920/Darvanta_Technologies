import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { ContactCTA } from '../sections/ContactCTA';
import { toast } from 'react-hot-toast';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        }
      );


      if (!res.ok) {
        throw new Error('Request failed');
      }

      toast.success('Inquiry sent successfully! We\'ll get back to you soon.', {
        duration: 5000,
        position: 'top-right',
        icon: '✅'
      });

      setForm({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to send inquiry. Please try again.', {
        duration: 5000,
        position: 'top-right',
        icon: '❌'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section with Animation */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner with Darvanta.
            </h1>
            <p className="text-xl text-gray-600">
              Ready to discuss your enterprise software needs? Our team is available for
              technical discovery calls with qualified organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info - Left Column */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@darvantatech.com"
                    className="text-lg text-[#0A5C4E] hover:underline font-medium inline-block transform hover:translate-x-1 transition-transform"
                  >
                    info@darvantatech.com
                  </a>
                </div>

                {/* Website */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-250">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Website
                  </h3>
                  <a
                    href="https://www.darvantatech.com"
                    className="text-lg text-[#0A5C4E] hover:underline font-medium inline-block transform hover:translate-x-1 transition-transform"
                  >
                    www.darvantatech.com
                  </a>
                </div>

                {/* Global headquarters */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Global headquarters
                  </h3>
                  <p className="text-gray-600">
                    Global headquarters<br />
                    Remote-first company<br />
                    Operations across Asia & North America
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form - Right Column */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-200">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-250">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C4E]/20 focus:border-[#0A5C4E] transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C4E]/20 focus:border-[#0A5C4E] transition-all duration-300"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  {/* Company Field */}
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-350">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Business / Profession
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C4E]/20 focus:border-[#0A5C4E] transition-all duration-300"
                      placeholder="What do you do?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-400">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you planning?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C4E]/20 focus:border-[#0A5C4E] transition-all duration-300 resize-none"
                      placeholder="Tell us about what you want to build..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-450">
                    <Button
                      type="submit"
                      className="w-full transform hover:scale-[1.02] transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4 animate-in fade-in duration-700 ease-out delay-500">
                    By submitting, you agree to our privacy policy. Enterprise Messages only.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-500">
        <ContactCTA />
      </div>
    </>
  );
}