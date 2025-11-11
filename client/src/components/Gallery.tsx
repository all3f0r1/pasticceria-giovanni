import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/gallery-cannoli-1.jpg", alt: "Cannoli siciliens aux pistaches" },
  { src: "/gallery-cannoli-2.jpg", alt: "Cannoli traditionnels" },
  { src: "/gallery-cannoli-3.jpg", alt: "Cannoli assortis" },
  { src: "/gallery-cassata-1.jpg", alt: "Mini cassata sicilienne" },
  { src: "/gallery-cassata-2.jpg", alt: "Cassata traditionnelle" },
  { src: "/gallery-arancini-1.jpg", alt: "Arancini siciliens" },
  { src: "/gallery-arancini-2.jpg", alt: "Arancini dorés" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="mb-16">
        <h2 
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-3"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Nos Spécialités
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-primary/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImage ? 'bg-accent w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
