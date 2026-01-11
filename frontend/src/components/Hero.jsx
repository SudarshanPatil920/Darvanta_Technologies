// Hero.jsx
import React from 'react';
import { ArrowRight, Play, Sparkles, CheckCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    { text: 'No setup fees', icon: CheckCircle },
    { text: '14-day free trial', icon: CheckCircle },
    { text: 'Cancel anytime', icon: CheckCircle },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 500+ companies worldwide
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900">
                Build the Future with
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Modern Software
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-2xl">
              We craft cutting-edge digital solutions that drive growth, 
              enhance efficiency, and deliver exceptional user experiences 
              for forward-thinking businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-3 w-5 h-5" />
                View Services
              </button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-700">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">50+</div>
                <div className="text-gray-600">Experts</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  Analytics Dashboard
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Revenue', value: '$45.2K', change: '+24%' },
                    { label: 'Users', value: '12.5K', change: '+18%' },
                    { label: 'Growth', value: '24.7%', change: '+5%' },
                    { label: 'Engagement', value: '89%', change: '+3%' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                      <div className="text-sm text-gray-500">{stat.label}</div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-green-500 font-medium">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-48 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl border border-gray-200 relative overflow-hidden">
                  {/* Chart lines */}
                  <div className="absolute inset-0 flex items-end">
                    {[30, 60, 45, 80, 65, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 mx-1 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-lg"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-900">
                    Recent Activity
                  </div>
                  {[
                    'New user signup completed',
                    'Payment processed successfully',
                    'System update deployed',
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-green-500' : 
                          index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                      <span className="text-sm text-gray-500">2h ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;