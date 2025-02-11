import Image from "next/image";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyFeatures from "./components/KeyFeatures";
import MoreDetails from "./components/MoreDetails";
import PricingPlan from "./components/PricingPlan";
import Services from "./components/Services";
import Profit from "./components/Profit";
import Partners from "./components/Partners";
import ChatIcon from "./components/ChatIcon";
// import AnimatedComponent from "./components/HowItWorks";

export default function Home() {
  return (
    <div>
      <SideBar />
      <Hero />
      <KeyFeatures />
      <Services />
      <Profit />
      <Partners />
      <PricingPlan />
      <ChatIcon />
      {/* <AnimatedComponent /> */}
    </div>
  );
}
