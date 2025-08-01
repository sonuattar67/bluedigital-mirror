import { Palette, Code, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design",
    subtitle: "That Speaks Business.",
    description: "Whether it's an app, website, or visual identity — we craft user-first designs that convert attention into action.",
  },
  {
    icon: Code,
    title: "Technology", 
    subtitle: "That Builds Business.",
    description: "Need on-demand developers, custom backend, or platform integrations? We've got you covered with expertise across PHP, Python, React, Node.js, Zoho, Odoo, & more",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    subtitle: "Where Strategy Brings Business.", 
    description: "With 360° digital marketing services — SEO, paid ads, social media, influencer marketing — we grow brands with precision.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Growing your Revenue using{" "}
            <span className="text-primary">Blue Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group text-center lg:text-left space-y-6 p-8 rounded-2xl hover:bg-gradient-subtle transition-all duration-500 hover:shadow-medium hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Icon */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft group-hover:shadow-medium">
                    <IconComponent className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary">
                      {service.subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Illustration */}
        <div className="mt-16 flex justify-center animate-bounce-in" style={{animationDelay: '0.8s'}}>
          <div className="w-full max-w-md h-64 bg-gradient-subtle rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse-scale">
                <div className="w-12 h-12 bg-primary rounded-full animate-float"></div>
              </div>
              <p className="text-muted-foreground text-sm font-medium">Services Ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;