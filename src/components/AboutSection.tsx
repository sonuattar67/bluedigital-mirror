import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const stats = [
  { number: "28+", label: "Business we helped to grow" },
  { number: "224+", label: "Brand Projects we executed" },
  { number: "15+", label: "Years of Experience" },
  { number: "50+", label: "Team Members" },
];

const AboutSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isInView ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Who we are?
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-primary">
                Design. Build. Market. Repeat.
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a 15-year-old powerhouse delivering end-to-end solutions in Design, Marketing, and Technology.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From world-class UI/UX and brand storytelling to full-scale digital campaigns and custom tech development — we help businesses scale with speed and style.
              </p>
            </div>

            <Button variant="cta" size="lg">
              Let's Build Something Great!
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isInView ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-105 group ${
                  isInView ? 'animate-bounce-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isInView ? `${(index + 1) * 150}ms` : '0ms'
                }}
              >
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose Section */}
        <div className={`mt-20 text-center space-y-8 transition-all duration-1000 delay-500 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our PURPOSE is to meet your PURPOSE
            </h2>
            <p className="text-xl font-semibold text-primary">
              We Solve. We Build. We Deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;