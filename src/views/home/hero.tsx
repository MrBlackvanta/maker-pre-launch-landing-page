import heroLeft from "@/assets/illustration-hero-left.svg";
import heroMobile from "@/assets/illustration-hero-mobile.webp";
import { ScrollIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-x-clip md:mt-19 lg:mt-28.5">
      <div className="v-hero-squiggle absolute top-8.5 left-1/2 -z-10 hidden aspect-545/379 w-96.5 -translate-x-1/2 md:block lg:-top-4 lg:w-136" />
      <div className="md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-x-2.5">
        <picture className="md:v-hero-art-left block w-[110%] max-w-none md:justify-self-end">
          <source
            media="(min-width: 768px)"
            srcSet={heroLeft.src}
            width={heroLeft.width}
            height={heroLeft.height}
          />
          <img
            src={heroMobile.src}
            alt=""
            width={heroMobile.width}
            height={heroMobile.height}
            fetchPriority="high"
            className="aspect-410/233 w-full md:aspect-8/9"
          />
        </picture>
        <div className="md:v-hero-copy mx-auto mt-12 max-w-143 px-6 text-center md:mt-0 md:max-w-none md:px-0">
          <h1 className="text-display lg:text-display-lg font-extrabold">
            Get paid for the
            <br className="md:hidden" /> work
            <br className="hidden md:inline" /> you{" "}
            <span className="text-brand">love</span>
            <br className="md:hidden" /> to do.
          </h1>
          <p className="text-muted mt-6 lg:mx-auto lg:max-w-135">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
          <ScrollIcon className="text-brand mx-auto mt-8 w-6.5 lg:mt-16" />
        </div>
        <div className="v-hero-art-right hidden aspect-33/37 md:block md:justify-self-start" />
      </div>
    </section>
  );
}
