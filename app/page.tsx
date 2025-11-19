"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { flushSync } from "react-dom";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{ gender?: string; service?: string }>({});

  const openBooking = (prefill?: { gender?: string; service?: string }) => {
    console.log("openBooking called with prefill:", prefill);
    if (prefill) {
      flushSync(() => setBookingPrefill(prefill));
      setIsBookingModalOpen(true);
    } else {
      setBookingPrefill({});
      setIsBookingModalOpen(true);
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Styra Salon",
            "alternateName": "Styra Family Salon",
            "description": "Leading unisex family salon in Bengaluru offering professional haircut, hair spa, facial, threading, waxing, pedicure, manicure, beard styling, bridal makeup and complete grooming services.",
            "url": "https://styrasalon.in",
            "telephone": "+91-6364111745",
            "priceRange": "₹₹",
            "image": "https://styrasalon.in/salon-1.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ITI Layout",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.9352",
              "longitude": "77.6245"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "21:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61583356674456",
              "https://www.instagram.com/styrasalon/",
              "https://wa.me/6364111745"
            ],
            "areaServed": {
              "@type": "City",
              "name": "Bengaluru"
            },
            "serviceType": [
              "Haircut",
              "Hair Spa",
              "Facial",
              "Waxing",
              "Threading",
              "Pedicure",
              "Manicure",
              "Bridal Makeup",
              "Beard Styling",
              "Hair Coloring",
              "Hair Smoothening",
              "Keratin Treatment"
            ]
          })
        }}
      />
      <div className="min-h-screen">
        <Header onBookingClick={() => openBooking()} />
        <HeroSection onBookingClick={() => openBooking()} />
        <AboutSection onBookingClick={() => openBooking()} />
        <ServicesSection onBook={(p) => openBooking(p)} />
        <ContactSection />
        <Footer />
        <BookingModal
          key={`${bookingPrefill.gender || ""}-${bookingPrefill.service || ""}-${isBookingModalOpen ? "open" : "closed"}`}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialGender={bookingPrefill.gender}
          initialService={bookingPrefill.service}
        />
      </div>
    </>
  );
}

