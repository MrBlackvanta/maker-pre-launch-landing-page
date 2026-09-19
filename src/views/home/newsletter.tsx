import { Signature } from "@/components/layout";
import NewsletterForm from "./newsletter-form";

export default function Newsletter() {
  return (
    <footer className="relative mt-36 overflow-x-clip pb-41 md:mt-33 md:pb-30 lg:mt-50.5 lg:pb-40">
      <div className="v-footer-squiggle absolute -top-px left-1/2 -z-10 aspect-73/10 w-146 -translate-x-1/2 md:-top-4 md:right-0 md:left-auto md:w-255.5 md:translate-x-0 lg:-top-13 lg:w-416" />
      <div className="px-6 text-center">
        <h2 className="text-heading lg:text-heading-lg font-extrabold">
          Get notified when
          <br className="md:hidden" /> we launch
        </h2>
        <NewsletterForm />
      </div>
      <Signature />
    </footer>
  );
}
