import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spices.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28">
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, hsl(22 60% 57% / 0.25), transparent 40%), radial-gradient(circle at 80% 70%, hsl(25 35% 60% / 0.25), transparent 40%)",
          animation: "gradientMove 12s ease-in-out infinite alternate",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-[10%] left-[5%] w-44 h-44 rounded-full bg-primary/20 blur-[60px] pointer-events-none" style={{ animation: "float 10s ease-in-out infinite" }} />
      <div className="absolute bottom-[5%] right-[10%] w-44 h-44 rounded-full bg-gold/20 blur-[60px] pointer-events-none" style={{ animation: "float 10s ease-in-out infinite 3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-spice">Pure spices.</span>
              <br />
              Real flavor.
              <br />
              <span className="text-muted-foreground text-4xl md:text-5xl">No shortcuts.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Freshly ground homemade masalas crafted in small batches using premium whole spices. 
              No preservatives. No fillers. Just authentic aroma that transforms everyday cooking.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-cta-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-block"
              >
                Browse Products
              </a>
              <a
                href="#story"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all inline-block"
              >
                Our Story
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-warm">
              <img
                src={heroImage}
                alt="Premium Indian spices arranged on rustic wooden surface"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
