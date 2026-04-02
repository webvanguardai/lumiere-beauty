const services = [
  { icon: "✂️", name: "Hair Styling", desc: "Precision cuts, blowouts & updos tailored to your face shape and lifestyle.", price: "150" },
  { icon: "🎨", name: "Balayage & Color", desc: "Hand-painted highlights and full color transformations by certified colorists.", price: "350" },
  { icon: "💎", name: "Keratin Treatment", desc: "Smooth, frizz-free locks for up to 6 months with our premium keratin formula.", price: "400" },
  { icon: "💅", name: "Manicure & Pedicure", desc: "Classic, gel, or luxury spa mani-pedis with premium polishes and care.", price: "80" },
  { icon: "💄", name: "Makeup & Glam", desc: "From everyday glam to red-carpet ready — flawless looks for every occasion.", price: "200" },
  { icon: "🧖", name: "Facial & Skincare", desc: "Deep cleansing, hydrating facials and advanced skincare treatments.", price: "180" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", alt: "Hair color transformation", tall: true },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", alt: "Beauty model", tall: false },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Skincare treatment", tall: false },
  { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Portrait", tall: true },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", alt: "Makeup look", tall: false },
  { src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80", alt: "Hair styling", tall: true },
];

const testimonials = [
  { quote: "My balayage turned out absolutely stunning. The team is so talented and welcoming.", name: "Sara Al Maktoum", service: "Balayage" },
  { quote: "I found Lumière through a friend and now I won't go anywhere else. Best keratin in Dubai.", name: "Maria Fernandez", service: "Keratin" },
  { quote: "My bridal makeup was flawless — exactly what I dreamed of. Forever grateful.", name: "Aisha Rahman", service: "Bridal Makeup" },
];

const beforeAfter = [
  {
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
    label: "Hair Transformation",
  },
  {
    before: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    after: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80",
    label: "Nail Art",
  },
  {
    before: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&q=80",
    after: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    label: "Makeup Glam",
  },
];

const marqueeText = "HAIR · NAILS · MAKEUP · BALAYAGE · KERATIN · WAXING · FACIALS · BRIDAL · ";

export default function Home() {
  return (
    <main className="bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide">
            Lumière
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-[family-name:var(--font-dm-sans)] tracking-wider uppercase text-white/60">
            <a href="#services" className="hover:text-[#E8547A] transition-colors">Services</a>
            <a href="#gallery" className="hover:text-[#E8547A] transition-colors">Gallery</a>
            <a href="#about" className="hover:text-[#E8547A] transition-colors">About</a>
            <a href="#reviews" className="hover:text-[#E8547A] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#E8547A] transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-[#E8547A] text-white px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-wider hover:bg-[#d4496d] transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1080&fit=crop"
            alt="Lumière Beauty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl fade-in-up">
            <span className="inline-block bg-[#E8547A]/15 border border-[#E8547A]/30 text-[#E8547A] px-4 py-1.5 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] mb-8">
              ★ Discovery Gardens, Dubai
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.95] mb-6">
              Your Beauty,
              <br />
              <span className="font-semibold italic text-[#E8547A]">Elevated.</span>
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-white/60 mb-10 max-w-lg">
              Premium hair, nails & beauty — by certified stylists
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#E8547A] text-white px-8 py-4 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] hover:bg-[#d4496d] transition-all pulse-glow"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white px-8 py-4 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                Our Services ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#161616] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 gap-4 text-center">
          {[
            { num: "500+", label: "Happy Clients" },
            { num: "8", label: "Years in Dubai" },
            { num: "4.9★", label: "Google Rating" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#E8547A]">{s.num}</div>
              <div className="text-sm text-white/50 font-[family-name:var(--font-dm-sans)] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 2. MARQUEE ===== */}
      <div className="bg-[#E8547A] py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] mx-0">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ===== 3. SERVICES ===== */}
      <section id="services" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8547A] text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em]">What We Offer</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light mt-4">Our Services</h2>
            <div className="w-20 h-0.5 bg-[#E8547A] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="group bg-[#161616] border border-white/5 p-8 hover:border-[#E8547A]/40 hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold mb-3 group-hover:text-[#E8547A] transition-colors">
                  {s.name}
                </h3>
                <p className="text-white/50 text-sm font-[family-name:var(--font-dm-sans)] leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[#C9956B] font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wider">
                  from AED {s.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. GALLERY ===== */}
      <section id="gallery" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8547A] text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em]">Portfolio</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light mt-4">Our Work</h2>
            <p className="text-white/50 font-[family-name:var(--font-cormorant)] text-xl italic mt-4">See the transformations</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden break-inside-avoid">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${img.tall ? "aspect-[3/4]" : "aspect-square"}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. ABOUT / WHY US ===== */}
      <section id="about" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-[#0D0D0D]/80 backdrop-blur-sm border border-white/10 px-4 py-2 text-xs font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-[#C9956B]">
                Est. 2016 · Dubai
              </div>
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Lumière salon"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#E8547A]/30" />
            </div>

            {/* Right — Content */}
            <div>
              <span className="text-[#E8547A] text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em]">Why Lumière</span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light mt-4 mb-8 leading-tight">
                Where Every Visit Feels Like a{" "}
                <span className="italic text-[#E8547A]">Luxury Ritual</span>
              </h2>

              <div className="space-y-4 text-white/60 font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed mb-8">
                <p>
                  At Lumière Beauty Lounge, we believe beauty is not a service — it&apos;s an experience. Nestled in the heart of Discovery Gardens, Dubai, our salon has been transforming looks and elevating confidence since 2016.
                </p>
                <p>
                  Our team of internationally certified stylists brings expertise from across the globe, combining cutting-edge techniques with premium products that your hair and skin truly deserve.
                </p>
                <p>
                  From the moment you walk in, every detail is curated — the ambiance, the consultation, the result. Because at Lumière, you don&apos;t just leave looking beautiful. You leave feeling it.
                </p>
              </div>

              <div className="space-y-3 mb-10">
                {[
                  "Certified international stylists",
                  "Premium product brands only",
                  "500+ satisfied clients in Dubai",
                ].map((usp) => (
                  <div key={usp} className="flex items-center gap-3">
                    <span className="text-[#E8547A] text-lg">✓</span>
                    <span className="text-white/80 font-[family-name:var(--font-dm-sans)] text-sm">{usp}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block bg-[#E8547A] text-white px-8 py-4 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] hover:bg-[#d4496d] transition-colors"
              >
                Book Your Session →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. TESTIMONIALS ===== */}
      <section id="reviews" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8547A] text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em]">Testimonials</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light mt-4">Client Love</h2>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C9956B] text-xl">★</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#161616] border border-white/5 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C9956B]">★</span>
                  ))}
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-white/80 mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">{t.name}</p>
                  <p className="text-[#E8547A] text-xs font-[family-name:var(--font-dm-sans)] uppercase tracking-wider mt-1">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. BEFORE / AFTER ===== */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8547A] text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em]">Results</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light mt-4">The Transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((pair) => (
              <div key={pair.label}>
                <p className="text-center font-[family-name:var(--font-dm-sans)] text-sm uppercase tracking-[0.2em] text-white/50 mb-4">{pair.label}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <img src={pair.before} alt={`Before - ${pair.label}`} className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-[10px] font-[family-name:var(--font-dm-sans)] uppercase tracking-wider px-2 py-1 text-white/70">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <img src={pair.after} alt={`After - ${pair.label}`} className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-2 left-2 bg-[#E8547A]/80 text-[10px] font-[family-name:var(--font-dm-sans)] uppercase tracking-wider px-2 py-1 text-white">
                      After
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. BOOKING / CONTACT ===== */}
      <section id="contact" className="py-24" style={{ background: "linear-gradient(to bottom, #0D0D0D, #1a0a10)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8547A] text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em]">Book Now</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light mt-4">
              Ready for Your <span className="italic text-[#E8547A]">Transformation?</span>
            </h2>
            <p className="text-white/50 font-[family-name:var(--font-dm-sans)] text-sm mt-4">
              Book online or WhatsApp us for instant response
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form
              action="https://formspree.io/f/xpwzgkqn"
              method="POST"
              className="space-y-6"
            >
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Email Address" },
                { name: "phone", type: "tel", placeholder: "Phone Number" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white font-[family-name:var(--font-dm-sans)] text-sm placeholder:text-white/30 focus:border-[#E8547A] transition-colors"
                />
              ))}
              <select
                name="service"
                required
                className="w-full bg-transparent border-b border-white/10 py-3 text-white/30 font-[family-name:var(--font-dm-sans)] text-sm focus:border-[#E8547A] transition-colors"

              >
                <option value="" className="bg-[#161616]">Select Service</option>
                {services.map((s) => (
                  <option key={s.name} value={s.name} className="bg-[#161616] text-white">{s.name}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Any special requests?"
                rows={3}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white font-[family-name:var(--font-dm-sans)] text-sm placeholder:text-white/30 focus:border-[#E8547A] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#E8547A] text-white py-4 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] hover:bg-[#d4496d] transition-colors"
              >
                Send Booking Request
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-4">Visit Us</h3>
                <p className="text-white/50 font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed">
                  Discovery Gardens<br />
                  Dubai, United Arab Emirates
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-4">Hours</h3>
                <p className="text-white/50 font-[family-name:var(--font-dm-sans)] text-sm">
                  Daily: 10:00 AM – 9:00 PM
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-4">Get in Touch</h3>
                <p className="text-white/50 font-[family-name:var(--font-dm-sans)] text-sm mb-4">
                  +971 52 480 3610
                </p>
                <a
                  href="https://wa.me/971524803610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#E8547A] text-white px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] uppercase tracking-wider hover:bg-[#d4496d] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              {/* Map */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.545!2d55.1353!3d25.0388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzE5LjciTiA1NcKwMDgnMDcuMSJF!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lumière Beauty Lounge Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. FOOTER ===== */}
      <footer className="bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold mb-2">Lumière</h3>
              <p className="text-white/40 font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.2em]">Beauty Lounge</p>
              <p className="text-white/30 font-[family-name:var(--font-dm-sans)] text-sm mt-4 leading-relaxed">
                Dubai&apos;s premier luxury beauty destination since 2016.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[#E8547A] font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.3em] mb-6">Navigation</h4>
              <div className="space-y-3">
                {["Services", "Gallery", "About", "Reviews", "Contact"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-white/40 font-[family-name:var(--font-dm-sans)] text-sm hover:text-[#E8547A] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#E8547A] font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.3em] mb-6">Services</h4>
              <div className="space-y-3">
                {services.map((s) => (
                  <span key={s.name} className="block text-white/40 font-[family-name:var(--font-dm-sans)] text-sm">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#E8547A] font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.3em] mb-6">Contact</h4>
              <div className="space-y-3 text-white/40 font-[family-name:var(--font-dm-sans)] text-sm">
                <p>Discovery Gardens, Dubai</p>
                <p>+971 52 480 3610</p>
                <p>Daily: 10AM – 9PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/20 font-[family-name:var(--font-dm-sans)] text-xs">
              © 2025 Lumière Beauty Lounge · Discovery Gardens, Dubai
            </p>
            <a href="https://webvanguard.ai" target="_blank" rel="noopener noreferrer" className="text-white/20 font-[family-name:var(--font-dm-sans)] text-xs hover:text-[#E8547A] transition-colors">
              Website by Web Vanguard
            </a>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href="https://wa.me/971524803610"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#E8547A] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#d4496d] transition-all pulse-glow"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
