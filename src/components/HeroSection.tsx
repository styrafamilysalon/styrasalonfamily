"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import salonImages from "@/data/salonImages.json";

interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % salonImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {salonImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-12">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Best Unisex Salon in Bengaluru
            <br />
            <span style={{ color: 'hsl(33, 94%, 59%)' }}>Professional Hair, Beauty & Spa</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Premium salon services for men, women & kids | Expert haircut, facial, spa, waxing, threading & bridal makeup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onBookingClick}
              className="font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-salon group"
              style={{ backgroundColor: 'hsl(33, 94%, 59%)', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 50%)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)'}
            >
              Get Appointment Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-salon" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              View All Packages
            </Button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {salonImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? "w-8 h-2"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            style={index === currentImageIndex ? { backgroundColor: 'hsl(33, 94%, 59%)' } : {}}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
