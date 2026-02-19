import { motion } from "framer-motion";

// Spice images
import redChilli from "@/assets/spices/red-chilli.jpg";
import turmeric from "@/assets/spices/turmeric.jpg";
import garamMasala from "@/assets/spices/garam-masala.jpg";
import coriander from "@/assets/spices/coriander.jpg";
import meatMasala from "@/assets/spices/meat-masala.jpg";
import biryaniMasala from "@/assets/spices/biryani-masala.jpg";
import blackPepper from "@/assets/spices/black-pepper.jpg";
import cumin from "@/assets/spices/cumin.jpg";
import kashmiriChilli from "@/assets/spices/kashmiri-chilli.jpg";
import kasoorimMethi from "@/assets/spices/kasoori-methi.jpg";
import amchur from "@/assets/spices/amchur.jpg";
import dryGinger from "@/assets/spices/dry-ginger.jpg";
import chaatMasala from "@/assets/spices/chaat-masala.jpg";

interface Product {
  name: string;
  price: string;
  weight: string;
  desc: string;
  image: string;
}

const products: Product[] = [
  { name: "Red Chilli Powder", price: "₹120", weight: "100g", desc: "Fiery Kashmiri chillies, finely ground for vibrant colour and heat.", image: redChilli },
  { name: "Turmeric Powder", price: "₹90", weight: "100g", desc: "Pure haldi with deep golden colour and earthy aroma.", image: turmeric },
  { name: "Garam Masala", price: "₹150", weight: "100g", desc: "Our signature 12-spice blend, roasted and ground fresh weekly.", image: garamMasala },
  { name: "Coriander Powder", price: "₹80", weight: "100g", desc: "Rajasthani dhaniya, sun-dried and stone-ground to silky perfection.", image: coriander },
  { name: "Kitchen King Masala", price: "₹140", weight: "100g", desc: "All-purpose blend for sabzis, dals, and everyday Indian cooking.", image: garamMasala },
  { name: "Meat Masala", price: "₹160", weight: "100g", desc: "Bold aromatic blend crafted for mutton, lamb, and goat dishes.", image: meatMasala },
  { name: "Chicken Masala", price: "₹150", weight: "100g", desc: "Perfectly balanced spices for juicy, flavourful chicken curries.", image: meatMasala },
  { name: "Pav Bhaji Masala", price: "₹130", weight: "100g", desc: "Street-style Mumbai flavour, tangy and slightly sweet.", image: chaatMasala },
  { name: "Chaat Masala", price: "₹110", weight: "100g", desc: "Tangy amchur-based blend that brings chaat to life.", image: chaatMasala },
  { name: "Biryani Masala", price: "₹180", weight: "100g", desc: "Aromatic long-pepper blend for layered Lucknowi and Hyderabadi biryanis.", image: biryaniMasala },
  { name: "Sabji Masala", price: "₹120", weight: "100g", desc: "Light everyday blend that enhances any vegetable dish.", image: garamMasala },
  { name: "Kashmiri Chilli", price: "₹140", weight: "100g", desc: "Mild heat, stunning red colour – the secret to tandoori.", image: kashmiriChilli },
  { name: "Paneer Masala", price: "₹140", weight: "100g", desc: "Creamy-spice blend designed for paneer butter masala and more.", image: biryaniMasala },
  { name: "Rajma Masala", price: "₹130", weight: "100g", desc: "Hearty, warm spices that make rajma chawal unforgettable.", image: meatMasala },
  { name: "Chole Masala", price: "₹130", weight: "100g", desc: "Dark, earthy, tangy – authentic Punjabi chole flavour.", image: meatMasala },
  { name: "Kasoori Methi", price: "₹100", weight: "50g", desc: "Dried fenugreek leaves for that final flourish of aroma.", image: kasoorimMethi },
  { name: "Black Pepper", price: "₹200", weight: "100g", desc: "Tellicherry peppercorns, cracked for maximum pungency.", image: blackPepper },
  { name: "Cumin Powder", price: "₹110", weight: "100g", desc: "Roasted jeera, finely powdered for dals and raitas.", image: cumin },
  { name: "Amchur Powder", price: "₹100", weight: "100g", desc: "Tangy raw-mango powder, sun-dried for sour depth.", image: amchur },
  { name: "Dry Ginger Powder", price: "₹120", weight: "100g", desc: "Warming saunth, essential for chai masala and winter dishes.", image: dryGinger },
];

const ProductCard = ({ product }: { product: Product }) => {
  const waLink = `https://wa.me/919958768683?text=${encodeURIComponent(`Hi! I'd like to order ${product.name} (${product.weight}).`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-3xl p-6 shadow-warm border border-border hover:shadow-hover transition-shadow flex flex-col"
    >
      <div className="w-full h-48 rounded-2xl bg-secondary mb-5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-1">{product.name}</h3>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-2xl font-bold text-primary">{product.price}</span>
        <span className="text-sm text-muted-foreground">/ {product.weight}</span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{product.desc}</p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-whatsapp/40 bg-whatsapp/5 text-foreground rounded-full px-5 py-3 text-sm font-medium flex items-center gap-2 w-fit hover:bg-whatsapp hover:text-primary-foreground transition-all"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.63-1.416A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.72-6.022-1.94a.5.5 0 00-.404-.078l-3.132.957.892-3.27a.5.5 0 00-.064-.416A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
        Order on WhatsApp
      </a>
    </motion.div>
  );
};

const Products = () => (
  <section id="products" className="container mx-auto px-6 py-20">
    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 border-l-8 border-primary pl-6">
      Our Spices
    </h2>
    <p className="text-muted-foreground mb-10 pl-8">20 handcrafted blends, ground fresh in Delhi</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((p) => (
        <ProductCard key={p.name} product={p} />
      ))}
    </div>
  </section>
);

export default Products;
