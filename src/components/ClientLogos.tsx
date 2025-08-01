const clientLogos = [
  "Air India", "Alda", "Philips", "BOB", "AnalytIQ", "Anonet",
  "Aerglo", "EduCanada", "DocOnline", "Crown Rice", "Click2Confirm", "Glen",
  "GoClubbing", "Samriddhi IIM", "IID Delhi", "IMT", "ISB", "Labhyansh",
  "Levesque", "Madhav Mohan", "Max Skill First", "NX One", "Probus",
  "SGT University", "Sky Hi Global", "Solan Valley", "Surkh", "Shweta",
  "T3 Rolls Momos", "The Golden Estate", "Ventura", "Western University",
  "World Residency", "Neva", "HYNA Decor", "Tistabene"
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Scrolling logos container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* First set */}
            {clientLogos.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-muted rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium text-muted-foreground text-center px-2">
                  {client}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-muted rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium text-muted-foreground text-center px-2">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ClientLogos;