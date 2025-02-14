import { FaEnvelope } from "react-icons/fa";
import SocialMediaIcons from "./SocialMediaIcons";

const LeftFooterSection = () => {
  return (
    <footer className="bg-blue-950 text-white px-10 py-10 w-full font-sans">
      <div className="container mx-auto gap-8">
        <div>
          {" "}
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="AfroTrust Logo" className="w-10 h-10" />
              <h2 className="text-2xl font-semibold">AfroTrust</h2>
            </div>
            <p className="text-gray-300 mt-3">
              AfroTrust’s advanced credit scoring system provides accurate
              financial assessments, empowering lenders and individuals with
              data-driven insights. By analyzing spending behavior, repayment
              history, and risk factors, we ensure fair and transparent credit
              evaluations for better financial opportunities.
            </p>
          </div>
        </div>
        <div>
          {" "}
          {/* Links */}
          <div className="grid grid-cols-3 mt-5 ml-12">
            <div>
              <h3 className="font-semibold text-lg">QUick Links</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Whats New
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">About Us</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Main Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Legal Information</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Terms of Services
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-gray-900">
                    Pricing
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" className="hover:text-gray-900">
                    Services
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact Us
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* Contact & Newsletter */}
          <div className=" w-full mt-10 ml-10 flex justify-between gap-5">
            <div>
              {" "}
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <p className="text-gray-300 mt-2">+251 (99) 999-99-99</p>
              <p className="text-gray-300">afrotrust@ait.com</p>
              <p className="text-gray-300">Mekelle, Tigray</p>
            </div>

            {/* Newsletter Subscription */}
            <div className="">
              <h3 className="font-semibold text-lg">
                Subscribe to Our Newsletter
              </h3>
              <div className="flex border mt-3 rounded-lg overflow-hidden w-full max-w-md">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 outline-none text-gray-700 placeholder:text-blue-950"
                />
                <button className="bg-[#0F2C4D] text-whit px-4 border-4 border-white rounded-r-md py-2 font-semibold hover:bg-[#0D253D]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default LeftFooterSection;
