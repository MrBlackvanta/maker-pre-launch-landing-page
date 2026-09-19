import { FreePlanIcon, PaidPlanIcon } from "@/components/icons";
import type { ComponentType } from "react";

export type Plan = {
  name: string;
  intro: string;
  price: string;
  period?: string;
  perks: string[];
  icon: ComponentType<{ className?: string }>;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Dip your toe",
    intro:
      "Just getting started? No problem at all! Our free plan will take you a long way.",
    price: "Free",
    perks: [
      "Unlimited products",
      "Basic analytics",
      "Limited marketplace exposure",
      "10% fee per transaction",
    ],
    icon: FreePlanIcon,
  },
  {
    name: "Dive right in",
    intro:
      "Ready for the big time? Our paid plan will help you take your business to the next level.",
    price: "$25.00",
    period: "/ month",
    perks: [
      "Custom domain",
      "Advanced analytics and reports",
      "High marketplace visibility",
      "5% fee per transaction",
    ],
    icon: PaidPlanIcon,
    featured: true,
  },
];
