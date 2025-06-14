// pricingConfig.ts

export interface PricingCardProps
{
  title: string;
  price: string;
  points: string[];
}

export const oneYearPlans: PricingCardProps[] = [
  {
    title: "1 Year Plan",
    price: "150000",
    points: [
      "1 year calling enabled",
      "3 months unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance",
    ],
  },
  {
    title: "1 Year Plan",
    price: "250000",
    points: [
      "1 year calling enabled",
      "6 months unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
  {
    title: "1 Year Plan",
    price: "300000",
    points: [
      "1.6 year calling enabled",
      "6 months unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
];

export const twoYearPlans: PricingCardProps[] = [
  {
    title: "2 Year Plan",
    price: "250000",
    points: [
      "2 years calling enabled",
      "6 months unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
  {
    title: "2 Year Plan",
    price: "310000",
    points: [
      "2 years calling enabled",
      "1 year unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
  {
    title: "2 Year Plan",
    price: "380000",
    points: [
      "2 years calling enabled",
      "2 years unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
];

export const recommendedPlans: PricingCardProps[] = [
  {
    title: "1 Year Plan",
    price: "125000",
    points: [
      "1 year calling enabled",
      "1 year unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
  {
    title: "2 Years Plan",
    price: "210000",
    points: [
      "2 years calling enabled",
      "1 year unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
  {
    title: "3 Years Plan",
    price: "265000",
    points: [
      "3 years calling enabled",
      "2 years unlimited customer data",
      "Email & SMS enabled from sub mail address",
      "Mail support. For service and 10 visit from technician air maintanance"
    ],
  },
];
