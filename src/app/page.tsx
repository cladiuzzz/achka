import Hero from "../components/sections/Hero";
import Pilares from "../components/sections/Pilares";
import NosotrosPreview from "../components/sections/NosotrosPreview"; 

export default function Home() {
  return (
    <main>
      <Hero />
      <NosotrosPreview /> 
      <Pilares />
    </main>
  );
}