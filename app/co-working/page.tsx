import CoworkFeatures from "@/components/co-working/CoworkFeatures";
import CoWorkingHero from "@/components/co-working/CoWorkingHero";

export default function CoWorkingPage() {
  return (
    <main className="bg-black min-h-screen">
      <CoWorkingHero />
      <CoworkFeatures />
    </main>
  );
}
