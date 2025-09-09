// app/page.tsx
import { HeroSlider } from "./components/HeroSlider";
import { HomeSections } from "./components/HomeSections";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HomeSections />
     </>
  );
}
