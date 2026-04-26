import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Consequences from "./components/Consequences";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import EmergencyBanner from "./components/EmergencyBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <EmergencyBanner />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Consequences />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
}
