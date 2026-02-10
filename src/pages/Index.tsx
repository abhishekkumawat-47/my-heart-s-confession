import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import LoveLetterSection from "@/components/LoveLetterSection";
import ProposalSection from "@/components/ProposalSection";
import BackgroundMusic from "@/components/BackgroundMusic";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add love-themed scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section, .gallery-section, .letter-section, .proposal-section");
    sections.forEach((section) => {
      section.classList.add("scroll-animate");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <FloatingHearts />
      <BackgroundMusic />
      <HeroSection />
      <GallerySection />
      <LoveLetterSection />
      <ProposalSection />

      {/* Footer */}
      <footer className="py-8 text-center bg-secondary/20">
        <p className="font-display text-xl text-muted-foreground">
          Made with ❤️ just for you
        </p>
      </footer>
    </div>
  );
};

export default Index;
