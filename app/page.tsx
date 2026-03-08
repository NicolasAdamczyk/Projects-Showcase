import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import CurrentlyBuilding from "./components/sections/CurrentlyBuilding";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <CurrentlyBuilding />
    </div>
  );
}