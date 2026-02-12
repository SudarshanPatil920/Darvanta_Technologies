const services = [
  {
    title: 'Web Development',
    description: 'Scalable, performant web applications built with modern architectures and enterprise-grade security.',
    icon: '🌐'
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile experiences that delight users and drive business growth.',
    icon: '📱'
  },
  {
    title: 'Cloud Solutions',
    description: 'AWS, Azure, and GCP expertise for resilient, cost-optimized cloud infrastructure.',
    icon: '☁️'
  },
  {
    title: 'AI/ML',
    description: 'Intelligent systems that transform data into competitive advantage through predictive analytics.',
    icon: '🤖'
  },
  {
    title: 'DevOps',
    description: 'Automated CI/CD pipelines, infrastructure as code, and 24/7 system reliability.',
    icon: '⚙️'
  },
  {
    title: 'UI/UX',
    description: 'Human-centered design that balances aesthetic excellence with functional clarity.',
    icon: '🎨'
  },
  {
    title: 'SaaS Products',
    description: 'End-to-end product development from MVP to enterprise-scale SaaS platforms.',
    icon: '📊'
  },
  {
    title: 'Enterprise Software',
    description: 'Custom ERP, CRM, and legacy modernization for Fortune 500 companies.',
    icon: '🏢'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-[#0A5C4E] uppercase tracking-wider">
            Our capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Enterprise-grade solutions, delivered
          </h2>
          <p className="text-lg text-gray-600">
            From startups to global enterprises, we provide the technical excellence and 
            strategic insight needed to succeed in today's digital landscape.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 bg-white"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}