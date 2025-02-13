import React from "react";

const LeftFooterSection = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-12 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Soul Sense" className="h-10" />
            <h2 className="text-2xl font-semibold text-gray-800">Soul Sense</h2>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Beatae reiciendis aut sit in rerum perferendis. Est occaecati
            repudiandae non. Nisi vero illum.
          </p>
        </div>

        {/* Links - Clinic */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Clinic</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
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
                Appointment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Links - About Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About us</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Appointment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Contact us
          </h3>
          <p className="text-gray-600 text-sm">+1 (999) 999-99-99</p>
          <p className="text-gray-600 text-sm">hello@clinic.com</p>
          <p className="text-gray-600 text-sm">London</p>

          {/* Newsletter Subscription */}
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Subscribe to Our Newsletter
          </h3>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 border rounded-l-md w-full text-sm focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-4 rounded-r-md text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LeftFooterSection;
