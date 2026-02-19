import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AddressBar from "@/components/AddressBar";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Story from "@/components/Story";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AddressBar />
      <Features />
      <Products />
      <Story />
      <FAQ />
      <CTABand />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
