import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Our <span className="text-primary">Salon</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your appointment today | Walk-ins welcome | Call now for best salon services in Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="gradient-card shadow-salon border-0">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        131, MBN Arcade 2nd floor,10th Main, 8th Cross Rd
                        <br />

                        ITI Layout,Bengaluru, Karnataka 560068
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-salon border-0">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <a
                        href="tel:+916364111745"
                        className="text-primary hover:text-primary/80 transition-salon"
                      >
                        +91 6364111745
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-salon border-0">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                      <p className="text-muted-foreground">
                        <strong>Weekdays:</strong> 10:30 AM - 9:30 PM
                        <br />
                        <strong>Weekends:</strong> 9:30 AM - 9:30 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-salon border-0">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:styrafamilysalon@gmail.com"
                        className="text-primary hover:text-primary/80 transition-salon"
                      >
                        styrafamilysalon@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-salon h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0697399724263!2d77.64131119999999!3d12.9032371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c0025ea81b%3A0xac4a4d9a77eeb9a3!2sStyra%20Family%20Salon!5e0!3m2!1sen!2sin!4v1762592669011!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Styra Family Salon Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
