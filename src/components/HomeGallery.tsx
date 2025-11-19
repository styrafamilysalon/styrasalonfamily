import Image from "next/image";
import images from "@/data/galleryImages.json";

const HomeGallery = () => {
  return (
    <section aria-label="Salon showcase" className="relative z-10 bg-background">
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className="overflow-hidden rounded-xl shadow-salon hover:shadow-lg transition-salon hover-scale relative h-40 md:h-56 lg:h-64"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
