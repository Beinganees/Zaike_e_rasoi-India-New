import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-brown text-cream rounded-t-[3rem] pt-16 pb-8 mt-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">Zaike_e_rasoi</h3>
          <p className="text-cream/70 mb-4">Pure homemade spices · Delhi</p>
          <div className="flex items-center gap-2 text-cream/80 mb-2">
            <Phone className="w-4 h-4" /> 9958768683
          </div>
          <a
            href="https://instagram.com/Zaike_E_Rasoi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 hover:text-cream transition-colors"
          >
            📷 @Zaike_E_Rasoi
          </a>
        </div>
        <div>
          <div className="flex items-start gap-2 text-cream/80">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
            <p>House No.5/27-27a, first floor, Vikram Vihar, Lajpat Nagar 4, Defence Colony, Delhi – 110024</p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/20 pt-6 text-center text-cream/50 text-sm">
        © {new Date().getFullYear()} Zaike_e_rasoi — All rights reserved
      </div>
    </div>
  </footer>
);

export default Footer;
