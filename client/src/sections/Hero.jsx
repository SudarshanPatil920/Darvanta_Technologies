import { Button } from '../components/Button';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const [metrics, setMetrics] = useState({
    health: 98.6,
    response: 24,
    nodes: 1284
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        health: +(98.4 + Math.random() * 0.4).toFixed(1),
        response: +(23 + Math.floor(Math.random() * 3)),
        nodes: +(1280 + Math.floor(Math.random() * 10))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5C4E]/5 border border-[#0A5C4E]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0A5C4E]"></span>
              <span className="text-xs font-medium text-[#0A5C4E] uppercase tracking-wider">
                Trusted Enterprise Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Engineering the future of{' '}
              <span className="text-[#0A5C4E]">enterprise software</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Darvanta Technologies delivers mission-critical solutions to global enterprises.
              From AI/ML to cloud infrastructure, we build the systems that power modern business.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Start your project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center gap-8">
                {['Google', 'Microsoft', 'AWS', 'Stripe'].map((company) => (
                  <span key={company} className="text-gray-400 text-sm font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual - Live Enterprise Dashboard */}
          <div className="relative lg:block animate-in fade-in duration-1000 delay-200">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white/50">
                  <div className="flex items-center gap-3">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0A5C4E]/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0A5C4E]/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0A5C4E]/20"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">Darvanta Console</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A5C4E]/5 px-2 py-1 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A5C4E] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0A5C4E]"></span>
                    </span>
                    <span className="text-[10px] font-medium text-[#0A5C4E]">UPDATES</span>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="p-5">
                  {/* Live Metrics Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50/80 rounded-lg p-3 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">System Health</span>
                        <span className="text-[10px] text-[#0A5C4E] animate-pulse">● Live</span>
                      </div>
                      <div className="flex items-end gap-1 mt-1">
                        <span className="text-2xl font-semibold text-gray-900 tabular-nums">{metrics.health}</span>
                        <span className="text-xs text-gray-500 mb-1">%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-[#0A5C4E] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${metrics.health}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-gray-50/80 rounded-lg p-3 border border-gray-100">
                      <span className="text-xs text-gray-500">Avg Response</span>
                      <div className="flex items-end gap-1 mt-1">
                        <span className="text-2xl font-semibold text-gray-900 tabular-nums">{metrics.response}</span>
                        <span className="text-xs text-gray-500 mb-1">ms</span>
                      </div>
                      <span className="text-[10px] text-[#0A5C4E]">-3ms from avg</span>
                    </div>
                    <div className="bg-gray-50/80 rounded-lg p-3 border border-gray-100">
                      <span className="text-xs text-gray-500">Active Nodes</span>
                      <div className="flex items-end gap-1 mt-1">
                        <span className="text-2xl font-semibold text-gray-900 tabular-nums">{metrics.nodes}</span>
                        <span className="text-xs text-gray-500 mb-1">nodes</span>
                      </div>
                      <span className="text-[10px] text-green-600">+{metrics.nodes - 1280} today</span>
                    </div>
                  </div>

                  {/* Network Visualization */}
                  <div className="relative h-44 mb-4 bg-gradient-to-br from-[#0A5C4E]/[0.02] to-transparent rounded-xl p-3">
                    {/* Central Hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#0A5C4E]/10 rounded-full animate-ping" style={{ width: '70px', height: '70px', left: '-15px', top: '-15px' }}></div>
                        <div className="relative w-10 h-10 bg-[#0A5C4E] rounded-xl shadow-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-white/20 rounded-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Connected Services with Live Data Flow */}
                    {[
                      { name: 'Cloud', x: '10%', y: '20%', value: '99.99%', icon: '☁️', pulse: true },
                      { name: 'AI/ML', x: '80%', y: '20%', value: '98.2%', icon: '🤖', pulse: true },
                      { name: 'Mobile', x: '10%', y: '80%', value: '1.2M', icon: '📱', pulse: false },
                      { name: 'Web', x: '80%', y: '80%', value: '99.9%', icon: '🌐', pulse: true }
                    ].map((service, i) => (
                      <div
                        key={service.name}
                        className="absolute group"
                        style={{ left: service.x, top: service.y }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            {service.pulse && (
                              <div className="absolute inset-0 bg-[#0A5C4E]/20 rounded-full animate-pulse" style={{ width: '36px', height: '36px', left: '-2px', top: '-2px' }}></div>
                            )}
                            <div className="relative w-8 h-8 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-sm">{service.icon}</span>
                            </div>
                          </div>
                          <span className="text-[9px] font-medium text-gray-600 mt-1">{service.name}</span>
                          <span className="text-[8px] text-[#0A5C4E] font-medium">{service.value}</span>
                        </div>

                        {/* Animated data flow lines */}
                        {service.pulse && (
                          <div className="absolute top-1/2 left-1/2">
                            <div className="absolute w-12 h-0.5 bg-gradient-to-r from-[#0A5C4E]/30 to-transparent origin-left animate-pulse"
                              style={{
                                transform: `rotate(${i * 90}deg) translateX(20px)`,
                                opacity: 0.6
                              }}>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="20%" y1="25%" x2="48%" y2="50%" stroke="#0A5C4E" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
                      <line x1="80%" y1="25%" x2="52%" y2="50%" stroke="#0A5C4E" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
                      <line x1="20%" y1="75%" x2="48%" y2="50%" stroke="#0A5C4E" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
                      <line x1="80%" y1="75%" x2="52%" y2="50%" stroke="#0A5C4E" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
                    </svg>
                  </div>

                  {/* Live Activity Feed */}
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-700">Activity overview</span>
                      <span className="text-[10px] text-gray-400">preview</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { event: 'Deployment successful', time: 'Moments ago', status: 'success' },
                        { event: 'System status healthy', time: 'Updated recently', status: 'success' },
                        { event: 'Performance metrics', time: 'Within target range', status: 'info' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between animate-in fade-in duration-500" style={{ animationDelay: `${i * 150}ms` }}>
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'success' ? 'bg-[#0A5C4E]' : 'bg-blue-500'} animate-pulse`}></div>
                            <span className="text-xs text-gray-600">{item.event}</span>
                          </div>
                          <span className="text-[9px] text-gray-400">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#0A5C4E]/5 rounded-2xl -z-10"></div>
              <div className="absolute -top-3 -left-3 w-32 h-32 bg-[#0A5C4E]/5 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}