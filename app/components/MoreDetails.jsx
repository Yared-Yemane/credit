import React from "react";

const MoreDetails = () => {
  return (
    <div className="relative bg-[#F7F4EC] w-full h-auto flex justify-center items-center px-8 md:px-16 text-center overflow-hidden">
      {/* Background Grid using CSS */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-40"></div>

      {/* Quote Text */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-950 relative max-w-3xl">
        "Empowering smarter financial decisions for consumers and lenders
        alike."
      </h2>

      {/* How the System Works - Graphical and Precise */}
      <div className="mt-6 max-w-3xl text-lg text-gray-800">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Consumer Benefits */}
          <div className="flex flex-col items-center">
            <img
              src="/customer.png"
              alt="Consumer"
              className="w-full h-full rounded-lg mb-4 z-10"
            />
            <p className="font-bold text-lg">For Consumers</p>
            <p className="text-center">
              Improve your credit score with personalized insights and real-time
              tracking.
            </p>
          </div>

          {/* Lender/Bank Benefits */}
          <div className="flex flex-col items-center">
            <img src="/bank-icon.svg" alt="Bank" className="w-24 h-24 mb-4" />
            <p className="font-bold text-lg">For Lenders/Banks</p>
            <p className="text-center">
              Use advanced scoring models to reduce risk and make informed
              lending decisions.
            </p>
          </div>
        </div>

        {/* How We Make Profit - Infographic */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <img
                src="/subscription-icon.svg"
                alt="Subscription"
                className="w-16 h-16 mb-4 mx-auto"
              />
              <p className="font-bold">Subscription Fees</p>
              <p className="text-sm">
                Lenders & banks pay for access to premium reports & analytics.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <img
                src="/service-icon.svg"
                alt="Service"
                className="w-16 h-16 mb-4 mx-auto"
              />
              <p className="font-bold">Service Fees</p>
              <p className="text-sm">
                Consumers pay for credit monitoring and personalized
                consultations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hand Images */}
      <img
        src="/left-hand.png"
        alt="Left Hand"
        className="absolute bottom-0 left-0 w-[150px] md:w-[200px] lg:w-[250px]"
      />
      <img
        src="/right-hand.png"
        alt="Right Hand"
        className="absolute top-0 right-0 w-[150px] md:w-[200px] lg:w-[250px]"
      />
    </div>
  );
};

export default MoreDetails;
