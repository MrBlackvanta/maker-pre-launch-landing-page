import { features } from "@/data";

export default function Features() {
  return (
    <section className="mt-36 px-6 md:mt-28 lg:mt-50.5">
      <ul className="mx-auto grid max-w-143 gap-14 md:gap-10 lg:max-w-277.5 lg:grid-cols-4 lg:gap-7.5">
        {features.map(({ title, body, art, artWidth }) => (
          <li
            key={title}
            className="flex flex-col items-center gap-8 text-center md:w-129 md:flex-row md:gap-14 md:text-left md:odd:justify-self-end md:even:justify-self-start lg:w-auto lg:flex-col lg:items-start lg:gap-12 lg:justify-self-auto lg:even:mt-12"
          >
            <div className="bg-panel rounded-tile grid h-31 w-30 shrink-0 place-items-center lg:h-41 lg:w-40">
              <img
                src={art.src}
                alt=""
                width={art.width}
                height={art.height}
                loading="lazy"
                className={artWidth}
              />
            </div>
            <div>
              <h2 className="text-subhead font-extrabold">{title}</h2>
              <p className="text-muted mt-3 lg:mt-6">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
