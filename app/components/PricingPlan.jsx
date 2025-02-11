import React from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Intro Credit Check",
    price: "₿ 20",
    per: "per session",
    description: "Initial credit assessment for loan applicants.",
    features: [
      "Basic score report",
      "Initial analysis",
      "Chat support",
      "Limited resources",
      "Unlimited inquiries",
    ],
    popular: true,
  },
  {
    title: "Regular Credit Adv",
    price: "₿ 50",
    per: "per session",
    description: "Standard credit consultation for loan approval.",
    features: [
      "Full score breakdown",
      "Personal advice",
      "More tools access",
      "Chat support",
      "Unlimited queries",
    ],
  },
  {
    title: "Frequent Monitoring",
    price: "₿ 500",
    per: "per 14 sessions",
    description: "Frequent monitoring for optimizing loan decisions.",
    features: [
      "Score monitoring",
      "Credit optimization",
      "Priority support",
      "Advanced tools",
      "Unlimited sessions",
    ],
  },
  {
    title: "Complete Credit Opt",
    price: "₿ 1000",
    per: "per 28 sessions",
    description: "Full credit optimization for lending institutions.",
    features: [
      "Full score analysis",
      "Advanced strategies",
      "Full resources",
      "Priority support",
      "Unlimited access",
    ],
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`p-6 rounded-lg border border-black h-auto w-64 transition-colors duration-300 ${
        plan.popular
          ? "bg-blue-950 text-white"
          : "bg-white text-gray-900 hover:bg-blue-950 hover:text-white"
      }`}
    >
      {plan.popular && (
        <div className="mb-2 bg-white text-blue-900 px-3 py-1 rounded-full w-max font-bold text-xs">
          MOST POPULAR
        </div>
      )}
      <h2 className="text-3xl font-bold">{plan.price}</h2>
      <p className="text-sm mb-4">{plan.per}</p>
      <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
      <p className="text-sm mb-4">{plan.description}</p>
      <ul className="space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div
              className={` rounded-full p-[1px] transition-colors duration-300  ${
                plan.popular
                  ? "bg-white text-blue-950"
                  : "bg-blue-950 text-white group-hover:bg-white group-hover:text-blue-950 "
              }`}
            >
              <Check size={14} strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingPlan = () => {
  return (
    <div className=" pt-16">
      {" "}
      <div className="bg-yellow-200 text-yellow-800 mb-3 ml-16 px-3 py-1 inline-block rounded-full text-sm font-semibold">
        PACKAGES
      </div>
      {/* <div className=" pl-16 pb-3 text-4xl font-semibold text-blue-950">
        <h1 className="">Pricing Plan</h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 py-6 px-16">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="group">
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
