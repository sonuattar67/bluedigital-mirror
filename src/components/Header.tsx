import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    "What We Do": [
      "Strategy & Consulting",
      "Digital Transformation",
      "Brand Development",
      "Creative Solutions"
    ],
    "Services": [
      "Design Services",
      "Technology Services", 
      "Marketing Services",
      "AI Services"
    ],
    "Products": [
      "Custom Software",
      "Mobile Apps",
      "Web Platforms",
      "AI Solutions"
    ],
    "Our Company": [
      "About Us",
      "Our Team",
      "Careers",
      "Blog"
    ],
    "Case Studies": [
      "All Case Studies",
      "Design Projects",
      "Marketing Campaigns",
      "Technology Solutions"
    ]
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">BLUE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.entries(menuItems).map(([title, items]) => (
              <DropdownMenu key={title}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                    {title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {items.map((item) => (
                    <DropdownMenuItem key={item} className="cursor-pointer">
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="talk" size="default" className="hidden lg:flex">
            Lets Talk
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-foreground"></span>
              <span className="block w-full h-0.5 bg-foreground"></span>
              <span className="block w-full h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              {Object.entries(menuItems).map(([title, items]) => (
                <div key={title} className="space-y-2">
                  <h3 className="font-medium text-foreground">{title}</h3>
                  <div className="pl-4 space-y-2">
                    {items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <Button variant="talk" size="default" className="w-full mt-4">
                Lets Talk
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;