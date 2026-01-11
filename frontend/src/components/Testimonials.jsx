// Testimonials.jsx
import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  Building,
  Award
} from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      company: "TechCorp International",
      content: "DevStack transformed our digital infrastructure. Their team delivered a scalable solution that handles our global operations seamlessly. The attention to detail and ongoing support has been exceptional.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=3b82f6"
    },
    {
      name: "Michael Chen",
      role: "Product Director",
      company: "GrowthLabs Inc.",
      content: "Working with DevStack was a game-changer for our product. Their expertise in cloud architecture helped us scale 300% in the last quarter. The ROI has exceeded all expectations.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=3b82f6"
    },
    {
      name: "Emma Davis",
      role: "CEO & Founder",
      company: "StartupXYZ",
      content: "From concept to launch, DevStack guided us through every step. Their transparent communication and technical excellence made the entire process smooth and successful.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=3b82f6"
    },
    {
      name: "James Wilson",
      role: "Head of Engineering",
      company: "Enterprise Solutions Ltd.",
      content: "The AI-powered automation system they built saved us 40% in operational costs. Their solutions are not just technically sound but also business-focused.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=3b82f6"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const companies = [
    "TechCorp", "GrowthLabs", "StartupXYZ", "Enterprise", "DigitalFirst", "CloudNine"
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See how forward-thinking companies leverage our expertise to drive 
            innovation and achieve remarkable results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <Quote className="w-16 h-16 text-blue-100 mb-8" />
                    
                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-6 h-6 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-2xl text-gray-700 italic mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl border-4 border-white shadow-lg"
                      />
                      <div className="ml-6">
                        <div className="flex items-center mb-1">
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <Building className="w-5 h-5 text-gray-400 ml-3" />
                        </div>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <p className="text-blue-600 font-semibold">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-gradient-to-r from-blue-600 to-indigo-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8 text-lg">
            Trusted by innovative companies across industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-gray-800 font-semibold">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;