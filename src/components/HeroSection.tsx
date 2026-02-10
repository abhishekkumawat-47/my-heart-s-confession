import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Romantic sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-6xl md:text-8xl animate-heartbeat inline-block">
            ❤️
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
        >
          For The Most Beautiful Girl in My Life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          This website is just for you… because you are special to me. ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#gallery"
            className="inline-block bg-romantic-gradient text-primary-foreground font-heading px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Scroll Down 💕
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
