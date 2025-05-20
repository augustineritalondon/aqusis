import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreServices from "@/components/CoreServices";
import Services from "@/components/Services";
import MaintenancePyramid from "@/components/MaintenancePyramid";
import WhatsNew from "@/components/WhatsNew";
import Projects from "@/components/Projects";
import OurClients from "@/components/OurClients";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <CoreServices />
      <Services />
      <WhatsNew />
      <Projects />
      <OurClients />
      <MaintenancePyramid />
    </div>
  );
}
