import { Logo } from "@/components/icons";

export default function SiteHeader() {
  return (
    <header className="px-6 pt-10 md:pt-12 lg:pt-20">
      <div className="mx-auto flex max-w-143 justify-center md:justify-start lg:max-w-277.5">
        <Logo className="w-30" />
      </div>
    </header>
  );
}
