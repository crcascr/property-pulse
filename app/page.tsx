import { Hero } from "@/components";
import { InfoBoxes } from "@/components/hero/info-boxes";
import { HomeProperties } from "@/components/home/home-properties";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
