import type { Metadata } from "next";
import { bakeryLd } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FlavorOfMonth } from "@/components/FlavorOfMonth";
import { TheRange } from "@/components/TheRange";
import { CoffeeTeaser } from "@/components/CoffeeTeaser";
import { KetoFeature } from "@/components/KetoFeature";
import { BigAttitude } from "@/components/BigAttitude";
import { Locations } from "@/components/Locations";
import { Catering } from "@/components/Catering";
import { Proof } from "@/components/Proof";
import { GiftRewards } from "@/components/GiftRewards";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryLd()) }}
      />
      <Hero />
      <Marquee />
      <FlavorOfMonth />
      <TheRange />
      <CoffeeTeaser />
      <KetoFeature />
      <BigAttitude />
      <Locations />
      <Catering />
      <Proof />
      <GiftRewards />
    </main>
  );
}
