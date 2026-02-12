export function About() {
  const stats = [
    { value: '50+', label: 'Enterprise clients' },
    { value: '120+', label: 'Engineers' },
    { value: '6+', label: 'Countries served remotely' },
    { value: '98%', label: 'Client retention' }
  ];

  const investors = [
    {
      name: 'Andreessen Horowitz',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGyEcEdPfzca-b4iATLHuHIk80_yYMtRWw&s'
    },
    {
      name: 'Sequoia',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp1aaMuFWDwCGXkJ0-OGLaaAOgB02IiSoUg&s'
    },
    {
      name: 'Index Ventures',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInCoLdvAEruedVkU90IMa_NlgTuGlXQUXDw&s'
    },
    {
      name: 'Benchmark',
      logo: 'https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg'
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-[#0A5C4E] uppercase tracking-wider">
              About Darvanta
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Building the backbone of global business
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since our founding, Darvanta Technologies has been the trusted engineering partner
              for organizations undergoing digital transformation. We don't just write code—we
              architect systems that handle billions of transactions and serve millions of users daily.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Engineering excellence',
                  description: 'Our technical leadership averages 4+ years of experience at top-tier technology companies.'
                },
                {
                  title: 'Process maturity',
                  description: 'Well-defined engineering processes with rigorous QA and security best practices.'
                },
                {
                  title: 'Long-term partnership',
                  description: 'Average client relationship of 3+ years—we grow with our partners.'
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0A5C4E] mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-[#0A5C4E] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {investors.map((investor, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={investor.logo}
                        alt={investor.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/24/FFFFFF/CCCCCC?text=${investor.name.charAt(0)}`;
                        }}
                      />
                    </div>
                  ))}
                </div>

                <span className="text-sm text-gray-600">
                  Backed by <span className="font-semibold text-gray-900">Karan Bansal</span> & <span className="font-semibold text-gray-900">Pranav Shah</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}