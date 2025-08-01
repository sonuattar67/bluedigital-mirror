const MarketingSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Digital Alchemy:{" "}
                <span className="text-primary">
                  We Turn Leads into Loyal Fans.
                </span>
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-accent">
                Viral Ideas, Tangible Results
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Blue Digital Media, we don't just tick marketing boxes. We inject creativity into every campaign, crafting narratives that captivate, strategies that ignite, and results that leave you breathless.
                </p>
                
                <p>
                  We tailor each move to your brand's unique DNA, weaving stories that resonate, spark conversation and leave audiences begging for more. We'll turn your marketing journey into a vibrant dance of engagement, conversion, and pure, unadulterated brand love.
                </p>
                
                <p className="font-medium text-foreground">
                  Small talk? It's more like a big opportunity hiding in plain sight.
                </p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop"
                alt="Digital Marketing Illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero/10"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;