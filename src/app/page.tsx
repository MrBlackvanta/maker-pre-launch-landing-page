import { SiteHeader } from "@/components/layout";
import { Features, Hero, Newsletter, Pricing } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Newsletter />
    </>
  );
}
