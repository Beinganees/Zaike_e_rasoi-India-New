const CTABand = () => (
  <section className="container mx-auto px-6 pb-20">
    <div className="bg-cta-gradient text-primary-foreground rounded-[3rem] p-12 md:p-16 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to order?</h2>
      <p className="text-primary-foreground/80 text-lg mb-8">
        Click any product button or the floating WhatsApp icon below.
      </p>
      <a
        href="#products"
        className="bg-card text-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-block"
      >
        Explore Products
      </a>
    </div>
  </section>
);

export default CTABand;
