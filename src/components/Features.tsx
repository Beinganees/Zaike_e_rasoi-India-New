import { motion } from "framer-motion";
import { Leaf, Package, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No colours, no preservatives. Just pure spices ground fresh in Delhi.",
  },
  {
    icon: Package,
    title: "Delivered Fresh",
    desc: "Small batches every week. Packed in airtight zip pouches for maximum freshness.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Hand-selected whole spices sourced directly from trusted farms across India.",
  },
];

const Features = () => (
  <section className="container mx-auto px-6 py-20">
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-card p-8 rounded-3xl shadow-warm hover:-translate-y-2 transition-transform border border-border"
        >
          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
            <f.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;
