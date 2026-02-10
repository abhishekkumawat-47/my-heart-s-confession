import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, caption: "Every moment with you feels like magic ✨" },
  { src: gallery2, caption: "You light up my world like nobody else 🌹" },
  { src: gallery3, caption: "Our love story is my favourite 💕" },
  { src: gallery4, caption: "You have my heart, forever & always ❤️" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary/30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-center text-foreground mb-16"
      >
        Our Beautiful Moments in Future💖
      </motion.h2>

      <div className="max-w-xl mx-auto relative">
        {/* Image slider */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].caption}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Heart overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
          >
            ›
          </button>
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center font-heading text-lg md:text-xl text-muted-foreground mt-6 italic"
          >
            {images[current].caption}
          </motion.p>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
