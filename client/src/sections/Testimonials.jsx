const testimonials = [
  {
    quote: "Darvanta didn't just build our platform—they transformed how we think about technology. Their architectural decisions have saved us millions in operational costs.",
    author: 'Prem Verma',
    role: 'CTO, Global Financial Services',
    company: 'Fortune 100'
  },
  {
    quote: "The team's depth in cloud infrastructure and AI/ML is unmatched. They scaled our system from 10k to 10M users without a single incident.",
    author: 'Nidhi Sabale',
    role: 'VP of Engineering',
    company: 'HealthTech Unicorn'
  },
  {
    quote: 'Working with Darvanta feels like having a world-class internal engineering team without the overhead. Their process is impeccable.',
    author: 'Ankit Patel',
    role: 'Head of Product',
    company: 'Enterprise SaaS'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#0A5C4E] uppercase tracking-wider">
            Client success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-gray-600">
            Organizations that demand excellence choose Darvanta Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#0A5C4E] text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600 mt-1">{testimonial.role}</div>
                <div className="text-xs text-[#0A5C4E] font-medium mt-2">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}