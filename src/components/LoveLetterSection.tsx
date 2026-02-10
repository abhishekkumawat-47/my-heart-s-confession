import { motion } from "framer-motion";

const LoveLetterSection = () => {
  return (
    <section className="py-24 px-6 bg-sunset-gradient">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground mb-12"
        >
          A Letter From My Heart 💌
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-border"
        >
          <div className="font-display text-xl md:text-2xl leading-relaxed text-foreground space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              My Dearest,
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed"
            >
              From the very first moment I saw you, I knew something in my life had changed forever. 
              Your smile lights up my darkest days, your laughter is my favourite melody, and your 
              presence is the greatest gift I've ever received. Every day with you feels like a 
              beautiful dream that I never want to wake up from.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed"
            >
              You are not just my love — you are my best friend, my soulmate, my everything. 
              I want to spend every sunrise and every sunset with you, making memories that 
              will last a lifetime. 💕
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              Forever Yours ❤️
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
