import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";
import uiUxIllustration from "@/assets/ui-ux-illustration.jpg";
import motionGraphicsIllustration from "@/assets/motion-graphics-illustration.jpg";
import aiIllustration from "@/assets/ai-illustration.jpg";

const slides = [
  {
    id: 1,
    badge: "Welcome to Blue",
    title: "Boost Business.",
    subtitle: "Cut Effort. Think AI.",
    description: "Let AI handle the heavy lifting while you focus on scaling.",
    image: aiIllustration,
  },
  {
    id: 2,
    badge: "Welcome to Blue", 
    title: "Strategic Brand Creation:",
    subtitle: "Thoughtful, Data-Driven, and Powerful",
    description: "",
    image: heroIllustration,
  },
  {
    id: 3,
    badge: "Welcome to Blue",
    title: "Turning Ideas",
    subtitle: "into Intuitive Interfaces.",
    description: "We craft user-first digital experiences that drive engagement and deliver results.",
    image: uiUxIllustration,
  },
  {
    id: 4,
    badge: "Welcome to Blue",
    title: "Complex Ideas,",
    subtitle: "Simply Animated.",
    description: "High-impact motion graphics crafted for clarity and connection.",
    image: motionGraphicsIllustration,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border">
              <span className="text-sm font-medium text-muted-foreground">
                {slides[currentSlide].badge}
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block">{slides[currentSlide].title}</span>
                <span className="block text-primary">{slides[currentSlide].subtitle}</span>
              </h1>
              
              {slides[currentSlide].description && (
                <p className="text-lg text-muted-foreground max-w-md">
                  {slides[currentSlide].description}
                </p>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-auto object-cover transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
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

export default HeroCarousel;