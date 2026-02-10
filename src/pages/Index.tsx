import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import LoveLetterSection from "@/components/LoveLetterSection";
import ProposalSection from "@/components/ProposalSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <FloatingHearts />
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
