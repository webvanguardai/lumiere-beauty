import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/971524803610?text=Hi%20Lumi%C3%A8re!%20I%E2%80%99d%20like%20to%20book%20an%20appointment.";

const services = [
  {
    name: "Hair Styling",
    price: "AED 150",
    desc: "Blowouts, updos & signature styling by our expert team.",
    icon: "✂️",
  },
  {
    name: "Balayage & Color",
    price: "AED 350",
    desc: "Hand-painted highlights and vibrant color transformations.",
    icon: "🎨",
  },
  {
    name: "Keratin Treatment",
    price: "AED 400",
    desc: "Smooth, frizz-free hair that lasts up to 6 months.",
    icon: "💎",
  },
  {
    name: "Manicure & Pedicure",
    price: "AED 80",
    desc: "Classic and gel options with premium polish brands.",
    icon: "💅",
  },
  {
    name: "Makeup & Glam",
    price: "AED 200",
    desc: "Bridal, editorial, and everyday glam looks.",
    icon: "💄",
  },
  {
    name: "Facial & Skincare",
    price: "AED 180",
    desc: "Deep cleansing, hydration, and rejuvenation facials.",
    icon: "🧖",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600photo-1595476108010-b4d1f102b1b1?w=600&h=400&fit=croph=400photo-1595476108010-b4d1f102b1b1?w=600&h=400&fit=cropfit=crop",
    alt: "Luxury salon interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&h=400&fit=crop",
    alt: "Hair styling session",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
    alt: "Beautiful hair result",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop",
    alt: "Nail art design",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    alt: "Salon ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    alt: "Beauty treatment",
  },
];

const testimonials = [
  {
    name: "Sara Al Maktoum",
    text: "The best salon experience I've had in Dubai. My balayage turned out absolutely stunning, and the team made me feel so welcome.",
    rating: 5,
  },
  {
    name: "Maria Fernandez",
    text: "I found Lumière through a friend and now I won't go anywhere else. The keratin treatment transformed my hair completely.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    text: "Professional, warm, and incredibly talented. My bridal makeup was flawless — exactly what I dreamed of.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="font-serif text-2xl sm:text-3xl font-semibold text-dark tracking-wide">
            Lumière
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-secondary hover:text-accent transition-colors text-sm tracking-widest uppercase">
              Services
            </a>
            <a href="#gallery" className="text-secondary hover:text-accent transition-colors text-sm tracking-widest uppercase">
              Gallery
            </a>
            <a href="#testimonials" className="text-secondary hover:text-accent transition-colors text-sm tracking-widest uppercase">
              Reviews
            </a>
            <a href="#book" className="text-secondary hover:text-accent transition-colors text-sm tracking-widest uppercase">
              Contact
            </a>
          </div>
          <a
            href="#book"
            className="bg-accent hover:bg-accent-dark text-cream px-5 py-2.5 text-sm tracking-widest uppercase transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop"
            alt="Luxury beauty salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Discovery Gardens, Dubai
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream font-light leading-[1.1] mb-6">
              Where Beauty
              <br />
              Meets <span className="italic text-accent">Artistry</span>
            </h1>
            <p className="text-cream/80 font-sans text-lg sm:text-xl mb-10 max-w-lg leading-relaxed">
              A curated beauty experience by certified stylists using premium
              products. Your transformation starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="bg-accent hover:bg-accent-dark text-cream px-8 py-4 text-sm tracking-widest uppercase transition-colors text-center"
              >
                Book Your Appointment
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cream/30 hover:border-accent text-cream hover:text-accent px-8 py-4 text-sm tracking-widest uppercase transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark font-light">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s) => (
              <div
                key={s.name}
                className="group bg-white p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-serif text-2xl text-dark mb-2">{s.name}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <p className="text-accent font-sans font-medium text-lg">
                  from {s.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 sm:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream font-light">
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">
              The Lumière Difference
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark font-light">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark mb-3">
                Certified Stylists
              </h3>
              <p className="text-secondary leading-relaxed">
                Our team holds international certifications and trains continuously with the latest techniques and trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark mb-3">
                Premium Products
              </h3>
              <p className="text-secondary leading-relaxed">
                We use only professional-grade products from trusted brands — because your hair and skin deserve the best.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark mb-3">
                Online Booking
              </h3>
              <p className="text-secondary leading-relaxed">
                Book your appointment anytime — through our website form or WhatsApp. No calls needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">
              Client Love
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream font-light">
              What They Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-cream/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-accent font-sans text-sm tracking-widest uppercase">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Online */}
      <section id="book" className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark font-light">
              Book Online
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form
                action="https://formspree.io/f/xpwzgkqn"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-secondary tracking-widest uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white border border-accent/20 focus:border-accent outline-none px-4 py-3 text-dark transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-secondary tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white border border-accent/20 focus:border-accent outline-none px-4 py-3 text-dark transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-secondary tracking-widest uppercase mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-white border border-accent/20 focus:border-accent outline-none px-4 py-3 text-dark transition-colors"
                    placeholder="+971 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm text-secondary tracking-widest uppercase mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    className="w-full bg-white border border-accent/20 focus:border-accent outline-none px-4 py-3 text-dark transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option>Hair Styling</option>
                    <option>Balayage &amp; Color</option>
                    <option>Keratin Treatment</option>
                    <option>Manicure &amp; Pedicure</option>
                    <option>Makeup &amp; Glam</option>
                    <option>Facial &amp; Skincare</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-secondary tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-white border border-accent/20 focus:border-accent outline-none px-4 py-3 text-dark transition-colors resize-none"
                    placeholder="Preferred date, time, or any special requests..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-cream py-4 text-sm tracking-widest uppercase transition-colors"
                >
                  Send Booking Request
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.758!2d55.1353!3d25.0388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d5eabc5e5e5%3A0x0!2sDiscovery+Gardens!5e0!3m2!1sen!2sae!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lumière Beauty Lounge Location"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-secondary tracking-widest uppercase mb-1">
                    Address
                  </p>
                  <p className="text-dark font-serif text-lg">
                    Discovery Gardens, Dubai, UAE
                  </p>
                </div>
                <div>
                  <p className="text-sm text-secondary tracking-widest uppercase mb-1">
                    Hours
                  </p>
                  <p className="text-dark font-serif text-lg">
                    Daily 10:00 AM – 9:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-sm text-secondary tracking-widest uppercase mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-serif text-lg transition-colors"
                  >
                    +971 52 480 3610
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl text-cream mb-4">
            Lumière Beauty Lounge
          </p>
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Lumière Beauty Lounge. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#C9956B] hover:bg-[#B8845A] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
