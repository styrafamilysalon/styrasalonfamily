"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Scissors, Clock, Award, Heart } from "lucide-react";

interface AboutSectionProps { onBookingClick?: () => void }

const AboutSection = ({ onBookingClick }: AboutSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Scissors,
      title: "Expert Stylists & Beauticians",
      description: "Trained professionals using advanced techniques in haircuts, hair color, skincare and makeup",
    },
    {
      icon: Clock,
      title: "Open 7 Days a Week",
      description: "Flexible timing from morning to evening for your convenience",
    },
    {
      icon: Award,
      title: "International Quality Products",
      description: "Professional salon-quality products and organic herbal treatments",
    },
    {
      icon: Heart,
      title: "100% Customer Satisfaction",
      description: "Trusted by thousands of happy customers in Bengaluru",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Styra Salon</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'hsl(33, 94%, 59%)' }} />
          </div>

          {/* Short Description */}
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leading unisex family salon in Bengaluru providing professional haircut, hair spa, facial, threading, waxing, pedicure, manicure, beard styling, bridal makeup and complete grooming services for men, women and children at affordable prices.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="link"
              className="text-primary hover:text-primary/80 mt-4 text-lg font-semibold"
            >
              Discover Our Salon Experience →
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-xl shadow-salon hover:shadow-lg transition-salon text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-salon">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-primary mb-4">
              About Styra Family Salon
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Styra Family Salon is a modern unisex salon in Bengaluru that offers a wide
                range of hair, skin, and grooming services. We pride ourselves on creating an
                inclusive and welcoming environment where every member of the family can enjoy
                premium beauty and grooming experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Hair Care:</strong> Trend-forward haircuts, coloring, styling, and
                    hair treatments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Skin Care:</strong> Luxurious facials and other skin treatments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Grooming:</strong> Professional beard grooming and shaving services
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    <strong>Makeup:</strong> Bridal and party makeup application
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Operating Hours</h3>
              <p className="text-muted-foreground">
                <strong>Weekdays:</strong> 10:30 AM - 9:30 PM
                <br />
                <strong>Weekends:</strong> 9:30 AM - 9:30 PM
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Styra Salon
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Inclusive and welcoming environment for all genders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Skilled professionals using premium products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Hygienic, comfortable, and stylish interiors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Exceptional service with positive customer reviews</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => { setIsModalOpen(false); onBookingClick?.(); }} 
              className="text-white"
              style={{ backgroundColor: 'hsl(33, 94%, 59%)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 50%)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)'}
            >
              Contact Us
            </Button>
            <Button variant="outline" onClick={() => { setIsModalOpen(false); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Our Services
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
