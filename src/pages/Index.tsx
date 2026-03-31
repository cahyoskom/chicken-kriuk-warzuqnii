import { Phone, Leaf, Zap, Users, MessageCircle, Star } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import heroChicken from "@/assets/hero-chicken.jpg";
import menuAyam from "@/assets/menu-ayam-crispy.jpg";
import menuPaket from "@/assets/menu-paket-hemat.jpg";
import menuNasi from "@/assets/menu-nasi-ayam-teh.jpg";

const WA_LINK = "https://wa.me/6281234567890";

const menuItems = [
  { img: menuAyam, name: "Ayam Crispy", price: "Rp 10.000", badge: "Best Seller 🔥" },
  { img: menuPaket, name: "Paket Hemat", price: "Rp 15.000", badge: "Hemat!" },
  { img: menuNasi, name: "Nasi + Ayam + Teh", price: "Rp 18.000", badge: "Komplit" },
];

const testimonials = [
  { text: "Enak banget, repeat order terus 🔥", name: "Siti" },
  { text: "Murah tapi kualitas restoran!", name: "Budi" },
];

function MenuCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 px-1">
          {menuItems.map((item) => (
            <div key={item.name} className="flex-[0_0_65%] min-w-0">
              <div className="card-menu animate-fade-in">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[8px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-2.5 text-center">
                  <h3 className="text-xs font-bold text-foreground">{item.name}</h3>
                  <p className="text-accent font-extrabold text-sm mt-0.5">{item.price}</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-order mt-2 inline-block"
                  >
                    Pesan Sekarang &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {menuItems.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === selected ? "bg-primary w-5" : "bg-border"
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body max-w-md mx-auto relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2.5 bg-card/95 backdrop-blur-md sticky top-0 z-40 shadow-sm animate-fade-in">
        <span className="text-lg font-extrabold text-primary font-heading">🍗 AyamCrispyKu</span>
        <a
          href="tel:081234567890"
          className="flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full"
        >
          <Phone className="w-3 h-3" />
          0812-3456-7890
        </a>
      </header>

      {/* Hero - compact */}
      <section className="relative h-56 overflow-hidden">
        <img
          src={heroChicken}
          alt="Ayam Crispy"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div
          className="absolute inset-0 flex flex-col items-start justify-end px-5 pb-4"
          style={{ background: "linear-gradient(180deg, hsla(0 0% 0% / 0.1) 0%, hsla(0 0% 0% / 0.7) 100%)" }}
        >
          <h1 className="text-2xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-lg animate-fade-in">
            Ayam <em className="text-secondary not-italic">Crispy Juicy,</em>
            <br />
            Bikin Nagih
          </h1>
          <p className="text-lg font-bold text-primary-foreground/90 font-heading animate-fade-in">
            Sejak Gigitan Pertama
          </p>
          <p className="text-primary-foreground/60 text-[11px] mt-1 animate-fade-in">
            Order cepat tanpa ribet, langsung dari WhatsApp
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 bg-secondary text-secondary-foreground font-bold py-2 px-5 rounded-full text-xs shadow-lg inline-flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order Sekarang &gt;
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="flex justify-around py-4 px-4 bg-card">
        {[
          { icon: Leaf, label: "Selalu Fresh" },
          { icon: Zap, label: "Order Cepat" },
          { icon: Users, label: "Ratusan Pelanggan" },
        ].map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:scale-110 transition-transform">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-[10px] font-semibold text-foreground">{f.label}</span>
          </div>
        ))}
      </section>

      {/* Menu - Carousel / Swipe */}
      <section className="py-5 px-4">
        <div className="flex justify-center mb-4">
          <h2 className="section-title">🍽️ Menu Kami</h2>
        </div>
        <MenuCarousel />
      </section>

      {/* Testimonials */}
      <section className="py-5 px-4 bg-card">
        <div className="flex justify-center mb-3">
          <h2 className="section-title">💬 Kata Mereka</h2>
        </div>
        <div className="space-y-2.5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-muted rounded-xl p-3 flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-base">😊</span>
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array(5).fill(null).map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xs text-foreground italic leading-relaxed">"{t.text}"</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold">– {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="py-5 px-4">
        <div className="flex justify-center mb-3">
          <h2 className="section-title">📍 Temukan Kami</h2>
        </div>
        <div className="card-menu overflow-hidden">
          <iframe
            title="Lokasi AyamCrispyKu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521!2d106.845!3d-6.208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMjguOCJTIDEwNsKwNTAnNDIuMCJF!5e0!3m2!1sid!2sid!4v1"
            className="w-full h-36 border-0"
            loading="lazy"
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Bisa pesan via GoFood, Grab, atau langsung WA!
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="bg-accent text-accent-foreground py-3 px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xs">Lagi Lapar?</p>
            <p className="text-[10px] opacity-90">Klik Sekarang, Order Langsung!</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-[10px] px-3 py-2 rounded-full hover:scale-105 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Chat WhatsApp
          </a>
        </div>
      </footer>

      {/* Floating WA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Index;
