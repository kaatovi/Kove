import Hero from "@/components/Hero";
import Projects from "@/components/Projects"
import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingBackground from "@/components/FloatingBackground";
import Trademark from "@/components/Trademark";

export default function Home() {
  return (
      <main style={{minHeight: "100vh", position:"relative", background: "#1A1A1A"}}> 
        <FloatingBackground />
        <div style={{position: "relative", zIndex: 1, padding: "2rem"}}>
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Trademark />
        </div>
      </main>
  );
}
