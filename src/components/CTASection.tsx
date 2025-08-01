import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Are you ready for your{" "}
            <span className="text-primary">Business Success?</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            At the core of our work lies a commitment to creating impactful, future-ready brands. We believe in a strategic approach that combines creativity with data-driven insights.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="cta" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;