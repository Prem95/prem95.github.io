import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MobileNav />

      <main className="flex justify-center" style={{ background: "var(--bg)" }}>
          <div
            className="w-full px-5 sm:px-10 lg:px-14 xl:px-20"
            style={{ maxWidth: "780px" }}
          >
            <Hero />
            <div style={{ borderTop: "1px solid var(--border-light)" }}>
              <About />
            </div>
            <div style={{ borderTop: "1px solid var(--border-light)" }}>
              <Experience />
            </div>
            <div style={{ borderTop: "1px solid var(--border-light)" }}>
              <Products />
            </div>
            <div style={{ borderTop: "1px solid var(--border-light)" }}>
              <Contact />
            </div>
            <Footer />
          </div>
        </main>
    </>
  );
}
