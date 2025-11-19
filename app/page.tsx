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
  );
}

