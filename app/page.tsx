"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import Starfield from "@/components/background/Starfield";
import ParticlesCanvas from "@/components/background/ParticlesCanvas";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Dashboard from "@/components/sections/DashboardPreview";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import TeamOrbit from "@/components/sections/TeamOrbit";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader visible={!loaded} />

      {/* Fixed backgrounds */}
      <Starfield />
      <ParticlesCanvas />

      {/* Floating ambient blobs */}
      <div
        aria-hidden
        className="blob-float pointer-events-none fixed rounded-full opacity-[0.18] blur-[100px] z-0"
        style={{ width: 500, height: 500, background: "#a855f7", top: -100, left: -150, ["--bd" as string]: "22s", ["--bx" as string]: "60px", ["--by" as string]: "40px" }}
      />
      <div
        aria-hidden
        className="blob-float pointer-events-none fixed rounded-full opacity-[0.18] blur-[100px] z-0"
        style={{ width: 400, height: 400, background: "#3b82f6", bottom: "10%", right: -100, ["--bd" as string]: "28s", ["--bx" as string]: "-40px", ["--by" as string]: "60px" }}
      />
      <div
        aria-hidden
        className="blob-float pointer-events-none fixed rounded-full opacity-[0.10] blur-[100px] z-0"
        style={{ width: 350, height: 350, background: "#06b6d4", top: "40%", left: "40%", ["--bd" as string]: "18s", ["--bx" as string]: "80px", ["--by" as string]: "-50px" }}
      />

      {/* Page content */}
      <div className="relative z-[2]">
        <Navbar />
        <main>
          <Hero />
          <Impact />
          <Dashboard />
          <Features />
          <HowItWorks />
          <UseCases />
          <TeamOrbit />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
