import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const languages = [
    "Arabic", "Chinese (Simplified)", "Dutch", "English", "French", 
    "German", "Italian", "Portuguese", "Russian", "Spanish"
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">BLUE</h2>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Design. Build. Market. Repeat. We're a 15-year-old powerhouse delivering end-to-end solutions in Design, Marketing, and Technology.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:growth@bluedigital.co.in"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                growth@bluedigital.co.in
              </a>
              <a
                href="tel:+91-9958078676"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91-9958078676
              </a>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Languages</h3>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((language) => (
                <a
                  key={language}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {language}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Blue Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;