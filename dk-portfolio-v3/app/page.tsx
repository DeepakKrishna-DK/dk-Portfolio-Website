import CyberCanvas from "@/components/canvas/CyberCanvas";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Dashboard from "@/components/sections/Dashboard";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CyberCanvas />
      <Navbar />
      <main>
        <Hero />
        <div className="divider mx-6" />
        <About />
        <div className="divider mx-6" />
        <Experience />
        <div className="divider mx-6" />
        <Projects />
        <div className="divider mx-6" />
        <Research />
        <div className="divider mx-6" />
        <Skills />
        <div className="divider mx-6" />
        <Certifications />
        <div className="divider mx-6" />
        <Dashboard />
        <div className="divider mx-6" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
