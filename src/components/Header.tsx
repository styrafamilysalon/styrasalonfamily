"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

interface HeaderProps {
  onBookingClick: () => void;
}

const Header = ({ onBookingClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Salon Home" },
    { id: "about", label: "Why Choose Us" },
    { id: "services", label: "Packages & Pricing" },
    { id: "contact", label: "Visit Salon" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-salon ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-salon"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Logo Image */}
            <Image 
              src="/logo.png" 
              alt="Styra Salon Logo" 
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              unoptimized
            />
            
            {/* Simple bold text */}
            <h1 className="text-2xl font-bold">
              <span style={{ color: 'hsl(33, 94%, 59%)' }}>Styra</span>
              {" "}
              <span className="text-primary">Salon</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-salon ${
                  activeSection === item.id
                    ? "text-primary font-bold text-base"
                    : "text-black font-medium hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={onBookingClick}
              className="font-semibold shadow-md hover:shadow-lg transition-salon"
              style={{ backgroundColor: 'hsl(33, 94%, 59%)', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 50%)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)'}
            >
              Book Your Slot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm transition-salon py-2 ${
                    activeSection === item.id
                      ? "text-primary font-bold text-base"
                      : "text-black font-medium hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onBookingClick();
                  setIsMobileMenuOpen(false);
                }}
                className="font-semibold w-full"
                style={{ backgroundColor: 'hsl(33, 94%, 59%)', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 50%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)'}
              >
                Book Your Slot
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
