import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <a href="#" className="font-display text-2xl font-bold text-brown">
          Zaike_e_rasoi
        </a>

        <button
          className="md:hidden text-brown"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-background/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none gap-6 items-center py-6 md:py-0 px-6 md:px-0 border-b md:border-none border-border`}
        >
          <a href="#products" className="text-foreground font-medium hover:text-primary transition-colors" onClick={() => setOpen(false)}>Spices</a>
          <a href="#story" className="text-foreground font-medium hover:text-primary transition-colors" onClick={() => setOpen(false)}>Story</a>
          <a href="#faq" className="text-foreground font-medium hover:text-primary transition-colors" onClick={() => setOpen(false)}>FAQ</a>
          <a
            href="https://wa.me/918076997341"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => setOpen(false)}
          >
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.63-1.416A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.72-6.022-1.94a.5.5 0 00-.404-.078l-3.132.957.892-3.27a.5.5 0 00-.064-.416A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Order Now
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
