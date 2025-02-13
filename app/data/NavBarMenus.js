import {
  HomeIcon,
  Gauge,
  CreditCard,
  MoreVerticalIcon,
  TrendingUp,
  Handshake,
  Layers,
} from "lucide-react";

export default [
  {
    label: "Home",
    url: "/",
    icon: HomeIcon,
    description: "Your home page, where you can navigate to other sections.",
  },
  {
    label: "Credit",
    url: "/credit",
    icon: CreditCard,
    image: "/navMenus/credit.png",
    submenus: [
      {
        label: "Credit Reports",
        url: "/credit/reports",
        description:
          "Access your credit reports and review your credit history.",
      },
      {
        label: "Credit Scores",
        url: "/credit/scores",
        description: "View and monitor your credit score.",
      },
      {
        label: "Credit Monitoring",
        url: "/credit/monitoring",
        description: "Stay informed with real-time credit monitoring.",
      },
      {
        label: "Credit Repair",
        url: "/credit/repair",
        description: "Find resources for repairing your credit.",
      },
    ],
  },
  {
    label: "Trends",
    url: "/trends",
    icon: TrendingUp,
    image: "/navMenus/credit.png",
    submenus: [
      {
        label: "Credit Score Trends",
        url: "/trends/credit-score-trends",
        description: "Track the latest trends in credit scores.",
      },
      {
        label: "Market Insights",
        url: "/trends/market-insights",
        description: "Get the latest insights into market trends.",
      },
      {
        label: "Economic Indicators",
        url: "/trends/economic-indicators",
        description: "Stay up-to-date on economic indicators and forecasts.",
      },
      {
        label: "Interest Rate Trends",
        url: "/trends/interest-rates",
        description: "Follow changes in interest rates over time.",
      },
    ],
  },
  {
    label: "Partners & Offers",
    url: "/partnersandoffers",
    icon: Handshake,
    image: "/navMenus/credit.png",
    submenus: [
      {
        label: "Credit Card Offers",
        url: "/partnersandoffers/credit-cards",
        description: "Explore the best credit card offers available.",
      },
      {
        label: "Loan Offers",
        url: "/partnersandoffers/loans",
        description: "Find the latest loan offers and rates.",
      },
      {
        label: "Financial Advisors",
        url: "/partnersandoffers/advisors",
        description:
          "Connect with trusted financial advisors for expert advice.",
      },
      {
        label: "Rewards & Discounts",
        url: "/partnersandoffers/rewards",
        description: "Discover rewards and discounts from our partners.",
      },
    ],
  },
  {
    label: "Resources",
    icon: Layers,
    // submenus: [
    //   {
    //     label: "Credit Guide",
    //     url: "/resources/credit-guide",
    //     description: "Learn more about credit and how to manage it.",
    //   },
    //   {
    //     label: "Financial Tips",
    //     url: "/resources/financial-tips",
    //     description: "Get helpful tips to improve your financial health.",
    //   },
    //   {
    //     label: "Credit Score Factors",
    //     url: "/resources/score-factors",
    //     description: "Understand the factors that affect your credit score.",
    //   },
    //   {
    //     label: "FAQ",
    //     url: "/resources/faq",
    //     description: "Find answers to frequently asked questions.",
    //   },
    // ],
  },
  {
    label: "More",
    url: "/more",
    icon: MoreVerticalIcon,
    image: "/navMenus/credit.png",
    submenus: [
      {
        label: "Customer Support",
        url: "/more/support",
        description: "Get assistance and support for your account.",
      },
      {
        label: "Blog",
        url: "/more/blog",
        description: "Read articles on various financial topics.",
      },
      {
        label: "Community Forum",
        url: "/more/forum",
        description:
          "Join discussions and connect with others in the community.",
      },
      {
        label: "Glossary",
        url: "/more/glossary",
        description: "Find definitions for financial terms in our glossary.",
      },
    ],
  },
];
