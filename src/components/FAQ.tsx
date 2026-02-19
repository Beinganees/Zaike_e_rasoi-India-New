import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Are your spices really homemade?",
    a: "Yes! Every blend is roasted and ground in our home kitchen in Lajpat Nagar 4, Delhi. We don't use any factory or industrial equipment — just traditional methods with premium whole spices.",
  },
  {
    q: "How do I place an order?",
    a: "Simply click the WhatsApp button on any product card, or use the floating WhatsApp icon. Send us your order and delivery address — we'll confirm and dispatch within 24 hours.",
  },
  {
    q: "Do you deliver outside Delhi?",
    a: "Yes, we courier across India. Shipping charges depend on your location. Delhi NCR orders can also be picked up from our Lajpat Nagar address.",
  },
  {
    q: "What's the shelf life?",
    a: "Our spices stay fresh for 6–8 months when stored in airtight containers away from sunlight. Since there are no preservatives, we recommend using them within 4 months for peak flavour.",
  },
  {
    q: "Can I get a custom blend?",
    a: "Absolutely! Message us on WhatsApp with your requirements and we'll create a personalised masala blend just for you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container mx-auto px-6 py-20">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 border-l-8 border-primary pl-6">
        FAQ
      </h2>
      <div className="max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-secondary rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex items-center justify-between p-5 font-semibold text-foreground text-lg">
              {faq.q}
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: openIndex === i ? 300 : 0 }}
            >
              <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
