import ArchitectureSection from "@/components/home/ArchitectureSection";
import BlogSection from "@/components/home/BlogSection";
import FeatureSection from "@/components/home/FeatureSection";
import ForgeSection from "@/components/home/ForgeSection";
import Hero from "@/components/home/Hero";
import TheHub from "@/components/home/TheHub";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* feature */}
      <FeatureSection />
      {/* the hub */}
      <TheHub />
      {/* architecture */}
      <ArchitectureSection />
      {/* forge */}
      <ForgeSection />
      {/* blog */}
      <BlogSection />
      {/* Adutha sections ivide add cheyyaam */}
      {/* <div className="h-screen bg-black" />  */}
    </main>
  );
}
