import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aditya Kapoor",
    role: "Director",
    content: "The marketing service exceeded our expectations! Their strategies boosted our online visibility and brought in quality leads. Professional, creative, and results-driven — highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CEO",
    content: "Blue Digital transformed our brand completely. Their design work is exceptional and their team truly understands business needs. The ROI has been incredible!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Founder",
    content: "Working with Blue Digital was a game-changer for our startup. Their technical expertise and creative solutions helped us scale rapidly. Couldn't be happier!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Marketing Head",
    content: "The level of professionalism and creativity at Blue Digital is outstanding. They delivered beyond our expectations and helped us achieve our marketing goals efficiently.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);
  
  // Fill remaining slots if needed
  if (visibleTestimonials.length < visibleCount) {
    const remaining = visibleCount - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-medium"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-medium"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-subtle p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCount)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                Math.floor(currentIndex / visibleCount) === index
                  ? "bg-primary animate-pulse-scale"
                  : "bg-muted hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;