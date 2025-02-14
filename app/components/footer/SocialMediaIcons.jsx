import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-6 bg-blue-950 p-4 justify-left ml-4 mt-5 transition-color duration-300">
      <FaFacebookF className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
      <FaInstagram className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
      <FaTwitter className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
      <FaYoutube className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
      <FaTiktok className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
      <FaPinterest className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
    </div>
  );
};

export default SocialMediaIcons;
