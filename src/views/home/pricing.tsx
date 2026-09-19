import { plans } from "@/data";
import PlanCard from "./plan-card";

export default function Pricing() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="mt-36 px-6 md:mt-35 lg:mt-50.5"
    >
      <div className="mx-auto max-w-143 text-center lg:max-w-135">
        <h2
          id="pricing-heading"
          className="text-heading lg:text-heading-lg font-extrabold"
        >
          Our pricing plans
        </h2>
        <p className="text-muted mt-7 lg:mt-6">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
      </div>
      <div className="mx-auto mt-20 flex max-w-111 flex-col gap-16 lg:mt-26 lg:max-w-230 lg:flex-row lg:items-center lg:gap-7.5">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
}
