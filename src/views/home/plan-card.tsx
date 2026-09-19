import { CheckIcon } from "@/components/icons";
import { type Plan } from "@/data";

export default function PlanCard({
  name,
  intro,
  price,
  period,
  perks,
  icon: Icon,
  featured,
}: Plan) {
  const tone = featured
    ? {
        card: "bg-brand text-ink pt-15 md:pb-15",
        iconWidth: "w-13",
        accent: "text-panel",
        muted: "text-ink/60",
      }
    : {
        card: "bg-panel pt-12 md:pb-12",
        iconWidth: "w-11.5",
        accent: "text-brand",
        muted: "text-white/60",
      };

  return (
    <article
      className={`relative rounded-lg px-7.5 pb-8 md:px-9.5 lg:flex-1 ${tone.card}`}
    >
      <Icon
        className={`absolute top-0 left-7.5 -translate-y-1/2 md:left-9.5 ${tone.iconWidth} ${tone.accent}`}
      />
      <h3 className="text-subhead font-extrabold">{name}</h3>
      <p className={`mt-5 ${tone.muted}`}>{intro}</p>
      <p className="text-price mt-6 font-extrabold">
        {price}
        {period && (
          <span className={`text-body font-medium ${tone.muted}`}>
            {" "}
            {period}
          </span>
        )}
      </p>
      <ul className="mt-5 grid gap-y-3">
        {perks.map((perk) => (
          <li key={perk} className="flex gap-x-3.5">
            <CheckIcon className={`mt-2 w-3 shrink-0 ${tone.accent}`} />
            {perk}
          </li>
        ))}
      </ul>
    </article>
  );
}
