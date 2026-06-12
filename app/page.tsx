import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import Services from "../components/Services";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Hero />
      <Reviews />
      <Services />
      <About />
      <Projects />
      <WhyUs />
      <FAQ />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
}