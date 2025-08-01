import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import strategicBrandIllustration from "@/assets/strategic-brand-illustration.jpg";
import uiUxWorkspace from "@/assets/ui-ux-workspace.jpg";
import motionGraphicsStudio from "@/assets/motion-graphics-studio.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";

const slides = [
  {
    id: 1,
    badge: "Welcome to Blue",
    title: "Boost Business.",
    subtitle: "Cut Effort. Think AI.",
    description: "Let AI handle the heavy lifting while you focus on scaling.",
    image: aiAutomation,
  },
  {
    id: 2,
    badge: "Welcome to Blue", 
    title: "Strategic Brand Creation:",
    subtitle: "Thoughtful, Data-Driven, and Powerful",
    description: "",
    image: strategicBrandIllustration,
  },
  {
    id: 3,
    badge: "Welcome to Blue",
    title: "Turning Ideas",
    subtitle: "into Intuitive Interfaces.",
    description: "We craft user-first digital experiences that drive engagement and deliver results.",
    image: uiUxWorkspace,
  },
  {
    id: 4,
    badge: "Welcome to Blue",
    title: "Complex Ideas,",
    subtitle: "Simply Animated.",
    description: "High-impact motion graphics crafted for clarity and connection.",
    image: motionGraphicsStudio,
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
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-subtle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-border animate-fade-in">
              <span className="text-sm font-medium text-muted-foreground">
                {slides[currentSlide].badge}
              </span>
            </div>
            
            <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block animate-slide-in-left" style={{animationDelay: '0.3s'}}>{slides[currentSlide].title}</span>
                <span className="block text-primary animate-slide-in-left" style={{animationDelay: '0.4s'}}>{slides[currentSlide].subtitle}</span>
              </h1>
              
              {slides[currentSlide].description && (
                <p className="text-lg text-muted-foreground max-w-md animate-fade-in" style={{animationDelay: '0.5s'}}>
                  {slides[currentSlide].description}
                </p>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-strong transform hover:scale-105 transition-all duration-500">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-auto object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-hero/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-scale"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide
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

export default HeroCarousel;