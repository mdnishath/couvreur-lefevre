import Roofer from "./Roofer/Roofer";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import ServiceExplain from "./ServiceExplain/ServiceExplain";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <Roofer />
        <Services />
        <ServiceExplain />
        <Slider />
      </div>
    </div>
  );
}
