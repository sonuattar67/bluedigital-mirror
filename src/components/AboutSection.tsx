import { Button } from "@/components/ui/button";

const stats = [
  { number: "28+", label: "Business we helped to grow" },
  { number: "224+", label: "Brand Projects we executed" },
  { number: "15+", label: "Years of Experience" },
  { number: "50+", label: "Team Members" },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
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
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mt-20 text-center space-y-8">
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