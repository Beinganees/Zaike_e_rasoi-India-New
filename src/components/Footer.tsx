import { Phone, MapPin, Mail } from "lucide-react"

const Footer = () => (
  <footer className="bg-brown text-cream rounded-t-[3rem] pt-16 pb-8 mt-10">
    <div className="container mx-auto px-6">

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10 mb-12">

        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">Zaike_e_rasoi</h3>

          <p className="text-cream/70 mb-4">
            Premium homemade spices crafted in small batches using high quality whole spices.
            100% pure, preservative-free masalas delivering authentic Indian flavour and rich aroma
            for everyday cooking.
          </p>

          <p className="text-cream/60 text-sm">
            Fresh ground spices · Authentic Indian masala · Buy homemade spices online
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>

          <div className="flex items-center gap-2 text-cream/80 mb-2">
            <Phone className="w-4 h-4" />
            <span>+91 8076997341</span>
          </div>

          <div className="flex items-center gap-2 text-cream/80 mb-2">
            <Mail className="w-4 h-4" />
            <span>zaikerasoi@gmail.com</span>
          </div>

          <a
            href="https://instagram.com/Zaike_E_Rasoi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 hover:text-cream transition-colors"
          >
            📷 Follow on Instagram @Zaike_E_Rasoi
          </a>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold mb-3">Our Locations</h4>

          <div className="flex items-start gap-2 text-cream/80 mb-2">
            <MapPin className="w-5 h-5 mt-1 shrink-0" />
            <p>Vikram Vihar, New Delhi – 110024</p>
          </div>

          <div className="flex items-start gap-2 text-cream/80">
            <MapPin className="w-5 h-5 mt-1 shrink-0" />
            <p>Uttam Nagar, New Delhi – 110059</p>
          </div>
        </div>

      </div>

      {/* Trust Section */}
      <div className="border-t border-cream/20 pt-6 text-center">

        <p className="text-cream/70 mb-2 text-sm">
          Freshly ground homemade masalas • No preservatives • No artificial colours • 100% pure spices
        </p>

        <p className="text-cream/50 text-sm">
          © {new Date().getFullYear()} Zaike_e_rasoi — Premium Homemade Spices Brand in India
        </p>

      </div>

    </div>
  </footer>
)

export default Footer