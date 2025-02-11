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
  },

  {
    label: "Credit",
    url: "/credit",
    icon: CreditCard,
  },
  {
    label: "Trends",
    url: "/trends",
    icon: TrendingUp,
  },
  {
    label: "Partners & Offers",
    url: "/partnersandoffers",
    icon: Handshake,
  },
  {
    label: "Tools",
    url: "/tools",
    icon: Gauge,
  },
  {
    label: "Resources",
    url: "/resources",
    icon: Layers,
  },
  {
    label: "More",
    url: "/more",
    icon: MoreVerticalIcon,
  },
];
