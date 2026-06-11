import Hero from "@/components/Hero";
import Projects from "@/components/Projects"
import FloatingBackground from "@/components/FloatingBackground";

export default function Home() {
  return (
      <main style={{minHeight: "100vh", position:"relative", background: "#1A1A1A"}}> 
        <FloatingBackground />
        <div style={{position: "relative", zIndex: 1, padding: "2rem"}}>
          <Hero />
          <Projects />
        </div>
      </main>
  );
}
