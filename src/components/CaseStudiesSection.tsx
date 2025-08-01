import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our creative journey—crafted designs, impactful visuals,
            and tailored solutions that bring ideas to life.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-border hover:bg-primary hover:text-white transition-all duration-300 shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-border hover:bg-primary hover:text-white transition-all duration-300 shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleCaseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="text-sm text-accent font-medium">
                  {study.category}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {study.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(caseStudies.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCount)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleCount) === index
                  ? "bg-primary"
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