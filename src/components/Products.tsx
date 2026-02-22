import { motion } from "framer-motion"

// Correct image imports (MATCH YOUR FOLDER EXACTLY)
import redChilli from "@/assets/spices/red-chilli.jpg"
import turmeric from "@/assets/spices/turmeric.jpg"
import garamMasala from "@/assets/spices/garam-masala.jpg"
import coriander from "@/assets/spices/coriander.jpg"
import meatMasala from "@/assets/spices/meat-masala.jpg"
import biryaniMasala from "@/assets/spices/biryani-masala.jpg"
import blackPepper from "@/assets/spices/black-pepper.jpg"
import cumin from "@/assets/spices/cumin.jpg"
import kashmiriChilli from "@/assets/spices/kashmiri-chilli.jpg"
import kasooriMethi from "@/assets/spices/kasoori-methi.jpg"
import amchur from "@/assets/spices/amchur.jpg"
import dryGinger from "@/assets/spices/dry-ginger.jpg"
import chaatMasala from "@/assets/spices/chaat-masala.jpg"

// Files with spaces (IMPORTANT — keep exact name)
import chickenMasala from "@/assets/spices/Chicken Masala.jpg"
import choleMasala from "@/assets/spices/Chole Masala.jpg"
import paneerMasala from "@/assets/spices/Paneer Masala.jpg"
import rajmaMasala from "@/assets/spices/Rajma Masala.jpg"
import pavBhaji from "@/assets/spices/Pav Bhaji.jpg"

interface Product {
  name: string
  price: string
  weight: string
  desc: string
  image: string
}

const products: Product[] = [
  {
    name: "Red Chilli Powder",
    price: "₹45",
    weight: "100g",
    desc: "Deep red Kashmiri chilli powder that adds rich colour and balanced heat. Perfect for curries, tadka, and marinades. Enhances flavour without overpowering dishes. Freshly ground for maximum aroma.",
    image: redChilli
  },
  {
    name: "Turmeric Powder",
    price: "₹40",
    weight: "100g",
    desc: "Premium haldi with high curcumin for vibrant colour and earthy taste. Ideal for daily cooking, immunity drinks, and marinades. Known for anti-inflammatory and antioxidant benefits.",
    image: turmeric
  },
  {
    name: "Garam Masala",
    price: "₹90",
    weight: "100g",
    desc: "Authentic aromatic blend of whole spices roasted to perfection. Adds warmth and depth to curries, dals, and gravies. Just a pinch elevates home cooking to restaurant taste.",
    image: garamMasala
  },
  {
    name: "Coriander Powder",
    price: "₹30",
    weight: "100g",
    desc: "Freshly ground dhaniya with mild citrus aroma. Enhances gravies, vegetables, and spice blends. Adds natural thickness and balanced flavour to dishes.",
    image: coriander
  },
  {
    name: "Meat Masala",
    price: "₹95",
    weight: "100g",
    desc: "Rich bold spice blend crafted for mutton and meat curries. Gives deep colour, thick gravy, and authentic restaurant flavour. Ideal for slow cooking recipes.",
    image: meatMasala
  },
  {
    name: "Chicken Masala",
    price: "₹90",
    weight: "100g",
    desc: "Perfect blend of spices for juicy chicken curry and tandoori recipes. Enhances aroma and gives rich gravy texture with authentic taste.",
    image: chickenMasala
  },
  {
    name: "Chole Masala",
    price: "₹90",
    weight: "100g",
    desc: "Traditional Punjabi chole spice mix with tangy and earthy flavour. Gives dark colour and bold taste just like dhaba style chole.",
    image: choleMasala
  },
  {
    name: "Rajma Masala",
    price: "₹80",
    weight: "100g",
    desc: "Balanced spice mix that brings authentic North Indian rajma flavour. Creates thick gravy and rich aroma for comfort meals.",
    image: rajmaMasala
  },
  {
    name: "Paneer Masala",
    price: "₹95",
    weight: "100g",
    desc: "Creamy spice blend ideal for paneer butter masala and shahi dishes. Adds mild sweetness and rich flavour profile.",
    image: paneerMasala
  },
  {
    name: "Pav Bhaji Masala",
    price: "₹90",
    weight: "100g",
    desc: "Street-style Mumbai spice blend with tangy and buttery notes. Perfect for pav bhaji, masala pulao, and fusion snacks.",
    image: pavBhaji
  },
  {
    name: "Biryani Masala",
    price: "₹99",
    weight: "100g",
    desc: "Premium aromatic blend for chicken and veg biryani. Adds authentic fragrance, colour, and layered flavour.",
    image: biryaniMasala
  },
  {
    name: "Chaat Masala",
    price: "₹70",
    weight: "100g",
    desc: "Tangy and zesty spice mix perfect for fruits, salads, snacks, and chaats. Instantly boosts flavour with a chatpata kick.",
    image: chaatMasala
  },
  {
    name: "Kashmiri Chilli",
    price: "₹70",
    weight: "100g",
    desc: "Mild heat chilli powder known for vibrant red colour. Ideal for tandoori, butter chicken, and gravies without too much spice.",
    image: kashmiriChilli
  },
  {
    name: "Kasoori Methi",
    price: "₹95",
    weight: "50g",
    desc: "Premium dried fenugreek leaves that add signature aroma to curries, gravies, and butter dishes. Sprinkle at end for best flavour.",
    image: kasooriMethi
  },
  {
    name: "Black Pepper",
    price: "₹85",
    weight: "100g",
    desc: "Strong pungent pepper with bold flavour. Perfect for seasoning, soups, marinades, and spice blends. Known to boost digestion.",
    image: blackPepper
  },
  {
    name: "Cumin Powder",
    price: "₹40",
    weight: "100g",
    desc: "Roasted jeera powder with warm earthy flavour. Enhances raita, curries, and snacks. Supports digestion and aroma.",
    image: cumin
  },
  {
    name: "Amchur Powder",
    price: "₹60",
    weight: "100g",
    desc: "Tangy dried mango powder that adds natural sourness to curries, chutneys, and snacks. Perfect alternative to lemon.",
    image: amchur
  },
  {
    name: "Dry Ginger Powder",
    price: "₹100",
    weight: "100g",
    desc: "Warm and aromatic saunth powder ideal for chai, sweets, and winter dishes. Known for digestive and immunity benefits.",
    image: dryGinger
  }
]

const ProductCard = ({ product }: { product: Product }) => {
  const waLink = `https://wa.me/918076997341?text=${encodeURIComponent(
    `Hi! I'd like to order ${product.name} (${product.weight}).`
  )}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-3xl p-6 shadow border hover:shadow-lg transition flex flex-col"
    >
      <div className="w-full h-48 rounded-2xl overflow-hidden mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xl font-bold text-primary">{product.price}</span>
        <span className="text-sm text-gray-500">/ {product.weight}</span>
      </div>

      <p className="text-sm text-gray-500 mb-5 flex-grow">{product.desc}</p>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full px-4 py-2 text-sm font-medium w-fit hover:bg-green-600 transition"
      >
        Order on WhatsApp
      </a>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Our Spices</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  )
}
