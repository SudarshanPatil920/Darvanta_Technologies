import { Button } from '../components/Button';

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A5C4E] to-[#0E7A6E] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Start your journey
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
          Ready to build with us?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Partner with Darvanta Technologies for your most critical initiatives.
          Our team is ready to understand your challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="/contact"
            size="lg"
            variant="secondary"
            className="bg-white text-[#0A5C4E] hover:bg-gray-50 border-0 min-w-[200px] select-text selection:bg-[#0A5C4E]/20 selection:text-[#0A5C4E]"
          >
            Contact our team
          </Button>
          <div className="text-white/80 text-sm flex items-center gap-2">
            <span>or email us at</span>
            <a
              href="mailto:info@darvantatech.com"
              className="font-medium text-white hover:underline select-text selection:bg-white/30 selection:text-white"
            >
              info@darvantatech.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-sm text-white/60">
            Typically responds within 24 hours · Enterprise inquiries only
          </p>
        </div>
      </div>
    </section>
  );
}