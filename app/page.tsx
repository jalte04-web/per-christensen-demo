import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Map from "../components/Map";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Map />
    </main>
  );
}