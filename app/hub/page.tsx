import HubFeatures from "@/components/hub/HubFeatures";
import HubHero from "@/components/hub/HubHero";

export default function HubPage() {
  return (
    <main className="bg-black min-h-screen">
      <HubHero />
      <HubFeatures />
      {/* ബാക്കി സെക്ഷനുകൾ ഓരോന്നായി ഇവിടെ ആഡ് ചെയ്യാം */}
    </main>
  );
}
