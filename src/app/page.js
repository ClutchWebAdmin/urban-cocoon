import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 mx-auto justify-center items-center px-5 md:px-10">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
