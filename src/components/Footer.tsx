"use client";

import { Facebook, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span style={{ color: 'hsl(33, 94%, 59%)' }}>Styra</span>
                {" "}
                <span className="text-white">Salon</span>
              </h3>
              <p className="text-primary-foreground/80">
                Best unisex family salon in Bengaluru offering professional hair, beauty, spa and grooming services for men, women & kids at affordable prices.
              </p>
              <p aria-hidden="true" className="sr-only">
                best salon in ITI Layout, best saloon in ITI Layout, salon near me, salon naer me, best salon in Bengaluru, best salon in Bangalore, top-rated unisex salon, family salon in ITI Layout, hair spa near me, haircut near me, bridal makeup near me, men&apos;s salon near me, women&apos;s salon near me, kids haircut Bengaluru, affordable salon services in ITI Layout, beauty parlour near me, stylist near me, grooming services Bengaluru, premium salon services Bangalore, professional hair and beauty services ITI Layout, best salon in JP Nagar, best salon in BTM Layout, best salon near Bannerghatta Road, salon in Jayanagar, salon in HSR Layout, haircut ITI Layout, hair spa ITI Layout, facial near me, waxing near me, pedicure near me, manicure near me, keratin treatment near me, hair smoothening near me, hair color near me, bridal makeup Bengaluru, kids salon near me, gents salon Bengaluru, ladies salon Bengaluru, salon offers near me, salon deals Bengaluru, family salon near me, unisex salon near me, salon open now, best salon reviews Bengaluru
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-salon"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-salon"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-salon"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-salon"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61583356674456&ref=pl_edit_ig_profile_ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center transition-salon"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/styrasalon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center transition-salon"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6364111745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center transition-salon"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Styra Family Salon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
