import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProposalSection = () => {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPosition({ x, y });
  }, []);

  const handleYes = () => setAnswered(true);

  // Heart explosion particles
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    tx: `${(Math.random() - 0.5) * 400}px`,
    ty: `${(Math.random() - 0.5) * 400}px`,
    size: Math.random() * 20 + 12,
    delay: Math.random() * 0.5,
  }));

  return (
    <section className="py-24 px-6 min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Mujhe ikk maths ke ques ka javab batao 🤔
          </h2>
          <p className="font-heading text-xl md:text-2xl text-primary italic mt-6">
            "Vo konse 10 digits ka combination hai jisko dial karne se aapko call lag jaaye?" 😘
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-7xl mb-12 animate-heartbeat inline-block"
        >
          💖
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-display text-3xl md:text-4xl text-foreground mb-12"
        >
          Will you go on a date with me? 💖
        </motion.h3>

        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 relative min-h-[120px]"
            >
              {/* Yes Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="bg-romantic-gradient text-primary-foreground font-heading text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Yes! 💕
              </motion.button>

              {/* No Button - moves away on hover */}
              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="bg-muted text-muted-foreground font-heading text-xl px-12 py-4 rounded-full shadow-md"
              >
                No 😢
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              {/* Heart explosion */}
              {hearts.map((heart) => (
                <motion.span
                  key={heart.id}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  animate={{
                    opacity: 0,
                    x: heart.tx,
                    y: heart.ty,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: heart.delay,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 text-primary pointer-events-none"
                  style={{ fontSize: heart.size }}
                >
                  ❤️
                </motion.span>
              ))}

              <div className="bg-card/90 backdrop-blur rounded-2xl p-10 shadow-2xl border border-border">
                <div className="text-6xl mb-4">🥰</div>
                <h3 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Yaaay! You made my day! 🎉
                </h3>
                <p className="font-body text-lg text-muted-foreground">
                  I promise to make every moment special for you.
                  <br/> 
                  <a 
                    // https://wa.me/xxxxxxxx - replace xxxxxxx with your phone number in international format without + or dashes
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary py-2 font-semibold transition-colors underline decoration-2 underline-offset-4 inline-block"
                  >
                    Message me on WhatsApp
                  </a> 
                  <br /> when you're free, and let's plan our first date!
                  Can't wait for our date! 💖✨
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProposalSection;
