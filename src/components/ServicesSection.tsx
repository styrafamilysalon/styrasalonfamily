"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles, Info } from "lucide-react";
import servicesData from "@/data/servicesData.json";

interface SubService {
  name: string;
  mrp: number;
  offer: number;
}

interface ServiceData {
  [key: string]: {
    sub_services: SubService[];
  };
}

interface ServicesData {
  male: ServiceData;
  female: ServiceData;
}

const servicesDataTyped = servicesData as unknown as ServicesData;

interface ServicesSectionProps { onBook?: (p: { gender?: string; service?: string }) => void }

const ServicesSection = ({ onBook }: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState<SubService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGender, setActiveGender] = useState<"male" | "female">("female");
  // Reset to 6 packages when switching tabs
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Reset visible count when gender tab changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeGender]);
  
  const handleServiceClick = (service: SubService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const calculateDiscount = (mrp: number, offer: number) => {
    return Math.round(((mrp - offer) / mrp) * 100);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Salon <span className="text-primary">Combo Packages</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: 'hsl(33, 94%, 59%)' }} />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Best value salon combo offers for complete makeover | Hair, beauty, spa & grooming packages at special prices
            </p>
          </div>

          {/* Gender Tabs */}
          <Tabs value={activeGender} onValueChange={(v) => setActiveGender(v as "male" | "female")} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger
                value="female"
                className="data-[state=active]:bg-salon-female data-[state=active]:text-primary-foreground"
              >
                Ladies Packages
              </TabsTrigger>
              <TabsTrigger
                value="male"
                className="data-[state=active]:bg-salon-male data-[state=active]:text-primary-foreground"
              >
                Gents Packages
              </TabsTrigger>
            </TabsList>

            {/* Men's Services */}
            <TabsContent value="male" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesDataTyped.male.Combos.sub_services.slice(0, visibleCount).map((service, index) => (
                  <Card
                    key={index}
                    className="gradient-male border-salon-male/20 hover:border-salon-male/40 transition-salon cursor-pointer group hover:shadow-lg"
                    onClick={() => handleServiceClick(service)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Sparkles className="w-5 h-5 text-salon-male flex-shrink-0 mt-1" />
                        <Badge className="text-white" style={{ backgroundColor: 'hsl(33, 94%, 59%)' }}>
                        Introductory Offer
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-semibold text-foreground line-clamp-3 group-hover:text-salon-male transition-salon">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-salon-male">
                              ₹{service.offer}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{service.mrp}
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-salon-male hover:text-salon-male hover:bg-salon-male/10"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceClick(service);
                          }}
                        >
                          <Info className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More Button for Men */}
              {visibleCount < servicesDataTyped.male.Combos.sub_services.length && (
                <div className="text-center mt-8">
                  <Button
                    onClick={loadMore}
                    variant="outline"
                    size="lg"
                    className="bg-salon-male/10 border-salon-male text-salon-male hover:bg-salon-male hover:text-white font-semibold px-8"
                  >
                    Load More Packages
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Women's Services */}
            <TabsContent value="female" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesDataTyped.female.Combos.sub_services.slice(0, visibleCount).map((service, index) => (
                  <Card
                    key={index}
                    className="gradient-female border-salon-female/20 hover:border-salon-female/40 transition-salon cursor-pointer group hover:shadow-lg"
                    onClick={() => handleServiceClick(service)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Sparkles className="w-5 h-5 text-salon-female flex-shrink-0 mt-1" />
                        <Badge className="text-white" style={{ backgroundColor: 'hsl(33, 94%, 59%)' }}>
                          Introductory Offer
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-semibold text-foreground line-clamp-3 group-hover:text-salon-female transition-salon">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-salon-female">
                              ₹{service.offer}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{service.mrp}
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-salon-female hover:text-salon-female hover:bg-salon-female/10"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceClick(service);
                          }}
                        >
                          <Info className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More Button for Women */}
              {visibleCount < servicesDataTyped.female.Combos.sub_services.length && (
                <div className="text-center mt-8">
                  <Button
                    onClick={loadMore}
                    variant="outline"
                    size="lg"
                    className="bg-salon-female/10 border-salon-female text-salon-female hover:bg-salon-female hover:text-white font-semibold px-8"
                  >
                    Load More Packages
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg p-0 flex flex-col">
          <div className="p-6 pb-4 shrink-0 border-b">
            <DialogTitle className="text-2xl font-bold text-primary pr-8">
              Complete Package Details
            </DialogTitle>
          </div>
          {selectedService && (
            <>
              <div className="space-y-6 overflow-y-auto overflow-x-hidden px-6 py-4" style={{ WebkitOverflowScrolling: 'touch', maxHeight: 'calc(90vh - 200px)', minHeight: '200px' }}>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {selectedService.name}
                  </h3>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-3xl font-bold text-primary">
                      ₹{selectedService.offer}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{selectedService.mrp}
                    </span>
                    <Badge className="text-white" style={{ backgroundColor: 'hsl(33, 94%, 59%)' }}>
                      Save ₹{selectedService.mrp - selectedService.offer}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                  <ul className="space-y-3">
                    {selectedService.name.split(" + ").map((item, index) => (
                      <li key={index} className="flex flex-col">
                        <div className="flex items-start">
                          <span className="mr-2 mt-1" style={{ color: 'hsl(33, 94%, 59%)' }}>✓</span>
                          <div className="flex-1">
                            <span className="font-medium text-foreground">{item}</span>
                            {(servicesData as any).descriptions?.[item] && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {(servicesData as any).descriptions[item]}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All services performed by expert stylists and beauticians using international quality products. Service duration varies based on hair length, type and skin condition. Best results guaranteed.
                  </p>
                </div>
              </div>

              <div className="shrink-0 p-6 pt-4 border-t">
                <Button
                  className="w-full text-white"
                  style={{ backgroundColor: 'hsl(33, 94%, 59%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 50%)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33, 94%, 59%)'}
                  onClick={() => {
                    if (selectedService) {
                      const bookingData = { 
                        gender: activeGender === 'male' ? 'Male' : 'Female',
                        service: selectedService.name 
                      };
                      console.log('Passing to booking form:', bookingData);
                      onBook?.(bookingData);
                    }
                    setIsModalOpen(false);
                  }}
                >
                  Book This Package
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
