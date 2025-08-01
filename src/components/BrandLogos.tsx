import { useEffect, useState } from "react";

const logos = [
  { name: "ChatGPT", src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Copilot", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg" },
  { name: "Midjourney", src: "https://cdn.worldvectorlogo.com/logos/midjourney.svg" },
  { name: "Gemini", src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "WhatsApp", src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
];

const BrandLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white border-t border-b border-border">
      <div className="container mx-auto px-6">
        {/* Desktop View - All logos visible */}
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-lg font-semibold text-muted-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden flex justify-center">
          <div className="flex items-center justify-center p-6">
            <img
              src={logos[currentIndex].src}
              alt={logos[currentIndex].name}
              className="h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-xl font-semibold text-muted-foreground">
              {logos[currentIndex].name}
            </span>
          </div>
        </div>

        {/* Mobile indicators */}
        <div className="md:hidden flex justify-center mt-4 space-x-2">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Chat with us button */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center gap-3 bg-green-50 hover:bg-green-100 transition-colors rounded-full px-6 py-3 cursor-pointer group">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              Chat with us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;