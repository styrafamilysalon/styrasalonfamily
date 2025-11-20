"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Phone, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGender?: string;
  initialService?: string;
}

import servicesData from "@/data/servicesData.json";

import timeSlotsData from "@/data/timeSlotsData.json";

const timeSlots = (timeSlotsData as any).timeSlots as string[];

const BookingModal = ({ isOpen, onClose, initialGender, initialService }: BookingModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "",
    date: "",
    time: "",
    service: "",
  });
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get minimum date (today) with IST and 8:00 PM rule
  const getMinDate = () => {
    const now = new Date();
    const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
    const cutoff = new Date(ist);
    cutoff.setHours(20, 0, 0, 0); // 8:00 PM cutoff
    const base = ist > cutoff ? new Date(ist.getTime() + 24 * 60 * 60 * 1000) : ist;
    const localDate = new Date(base.getFullYear(), base.getMonth(), base.getDate());
    return localDate.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (isOpen) {
      console.log('BookingModal opened with:', { initialGender, initialService });
      const defaultDate = getMinDate();
      setFormData((prev) => ({
        ...prev,
        gender: initialGender || "",
        service: initialService || "",
        date: defaultDate, // Set default date when modal opens
        time: "" // Reset time when date changes
      }));
    }
  }, [isOpen, initialGender, initialService]);

  // Ensure service is applied after gender/options are set on open (first-load safety)
  useEffect(() => {
    if (isOpen && initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService
      }));
    }
  }, [isOpen, initialService, formData.gender]);

  // Convert 24-hour time to 12-hour format with AM/PM
  const convertTo12Hour = (time24: string) => {
    const [hours, minutes] = time24.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Filter time slots based on selected date
  useEffect(() => {
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() === today.getTime()) {
        // If today, filter slots to show only future times (current time + 30 minutes)
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes() + 30;

        const filtered = timeSlots.filter((slot) => {
          const [hours, minutes] = slot.split(":").map(Number);
          const slotMinutes = hours * 60 + minutes;
          return slotMinutes > currentMinutes;
        });

        setAvailableTimeSlots(filtered);
      } else {
        // For future dates, show all slots
        setAvailableTimeSlots(timeSlots);
      }
    } else {
      setAvailableTimeSlots([]);
    }
  }, [formData.date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.gender ||
      !formData.date ||
      !formData.time ||
      !formData.service
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Name validation
    if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      toast({
        title: "Invalid Name",
        description: "Name must contain letters and spaces only.",
        variant: "destructive",
      });
      return;
    }

    // Mobile validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get current time in IST
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + istOffset);
      const submittedAtIST = istTime.toISOString().replace("Z", "+05:30");

      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        gender: formData.gender,
        date: formData.date,
        time: formData.time,
        service: formData.service,
        submitted_at_ist: submittedAtIST,
      };

      const response = await fetch("https://webhook.site/1aec41f4-4f49-4e35-b348-5a9642131e48", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your appointment request has been sent successfully.",
        });
        
        // Reset form
        setFormData({
          name: "",
          mobile: "",
          gender: "",
          date: getMinDate(), // Keep default date on reset
          time: "",
          service: "",
        });
        
        onClose();
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Unable to process your booking. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubServices = () => {
    if (!formData.gender) return [];
    const genderKey = formData.gender.toLowerCase() as "male" | "female";
    return ((servicesData as any)[genderKey]?.Combos?.sub_services || []).map((s: any) => (typeof s === 'string' ? s : s.name));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 flex flex-col">
        <div className="p-6 pb-4 shrink-0 border-b">
          <DialogTitle className="text-3xl font-bold text-primary flex items-center gap-2 pr-8">
            <Sparkles className="w-7 h-7" />
            Book Your Appointment
          </DialogTitle>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 overflow-y-auto overflow-x-hidden px-6 py-4" style={{ WebkitOverflowScrolling: 'touch', maxHeight: 'calc(90vh - 100px)', minHeight: '300px' }}>
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Mobile Number *
            </Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="10-digit mobile number"
              maxLength={10}
              required
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender">Gender *</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value, service: "" })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date *
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value, time: "" })}
              min={getMinDate()}
              required
            />
          </div>

          {/* Time */}
          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time *
            </Label>
            <Select
              value={formData.time}
              onValueChange={(value) => setFormData({ ...formData, time: value })}
              disabled={!formData.date}
            >
              <SelectTrigger>
                <SelectValue placeholder={formData.date ? "Select time slot" : "Select date first"} />
              </SelectTrigger>
              <SelectContent>
                {availableTimeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot} className="cursor-pointer">
                    {convertTo12Hour(slot)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service">Service *</Label>
            <Select
              key={formData.gender || "no-gender"} 
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              disabled={!formData.gender}
            >
              <SelectTrigger>
                <SelectValue placeholder={formData.gender ? "Select service" : "Select gender first"} />
              </SelectTrigger>
              <SelectContent className="max-w-[calc(100vw-4rem)]">
                {getSubServices().map((service, index) => (
                  <SelectItem key={index} value={service} className="cursor-pointer">
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Combo Details */}
          {formData.service && (
            <div className="space-y-2 p-4 bg-secondary rounded-lg">
              <h4 className="text-sm font-semibold">Includes:</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                {formData.service.split(" + ").map((part, idx) => (
                  <li key={idx}>
                    {part} 
                    <span className="text-xs text-muted-foreground/80"> — {(servicesData as any).descriptions?.[part] || ""}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full text-white font-semibold py-6 text-lg"
            style={{ backgroundColor: 'hsl(33, 94%, 59%)' }}
            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 50%)')}
            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)')}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;