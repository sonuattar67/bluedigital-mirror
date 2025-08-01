import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const caseStudies = [
  {
    id: 1,
    title: "Where Creativity Converts",
    client: "High Commission of Canada",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    category: "Digital Marketing"
  },
  {
    id: 2,
    title: "Bright Ideas. Clean Energy.",
    client: "Arka Energy AB, Sweden", 
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
    category: "Brand Design"
  },
  {
    id: 3,
    title: "Purely Natural",
    client: "Vedic Cosmeceuticals",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
    category: "Product Design"
  },
  {
    id: 4,
    title: "Where Comfort Meets Creativity",
    client: "Ventura International",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    category: "Interior Design"
  },
  {
    id: 5,
    title: "Accounts. Advice. Advancement.",
    client: "Labhyansh Services Private Limited",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    category: "Financial Services"
  },
  {
    id: 6,
    title: "Always Fast. Always On.",
    client: "ANONET Communications Pvt. Ltd.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    category: "Technology"
  }
];

const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleCount >= caseStudies.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, caseStudies.length - visibleCount) : prev - 1
    );
  };

  const visibleCaseStudies = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % caseStudies.length;
    visibleCaseStudies.push(caseStudies[index]);
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our creative journey—crafted designs, impactful visuals,
            and tailored solutions that bring ideas to life.
          </p>
        </div>

        {/* Navigation */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-1000 delay-300 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-border hover:bg-primary hover:text-white transition-all duration-300 shadow-soft hover:scale-110 hover:shadow-medium"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-border hover:bg-primary hover:text-white transition-all duration-300 shadow-soft hover:scale-110 hover:shadow-medium"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleCaseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 cursor-pointer ${
                isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: isInView ? `${(index + 1) * 200}ms` : '0ms',
                transitionDelay: isInView ? `${(index + 1) * 200}ms` : '0ms'
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:scale-110">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="text-sm text-accent font-semibold uppercase tracking-wide">
                  {study.category}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {study.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center gap-2 transition-all duration-1000 delay-700 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          {Array.from({ length: Math.ceil(caseStudies.length / visibleCount) }).map((_, index) => (
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

export default CaseStudiesSection;