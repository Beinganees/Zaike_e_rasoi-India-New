import { motion } from "framer-motion";

const Story = () => (
  <section id="story" className="container mx-auto px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-secondary rounded-[3rem] p-10 md:p-16"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
      <div className="max-w-3xl space-y-5 text-muted-foreground text-lg leading-relaxed">
        <p>
          Zaike_e_rasoi was born out of a simple frustration — store-bought masalas that tasted nothing like 
          the spices our grandmothers used. We started grinding our own blends at home in South Delhi, 
          using the same recipes passed down through generations.
        </p>
        <p>
          Every batch is roasted by hand, ground in small quantities, and packed the same day. 
          No factory, no fillers, no artificial colours. Just the honest, fiery, aromatic masalas 
          that make Indian food extraordinary.
        </p>
        <p>
          From our kitchen in Lajpat Nagar to yours — taste the difference that real spices make.
        </p>
      </div>
    </motion.div>
  </section>
);

export default Story;
