import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GetToKnowUs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 text-gray-400 rounded-lg mt-14    mb-40">
        <h2 className="text-3xl font-bold  mb-4 text-blue-500">
          Get to Know Us
        </h2>
        <p className="text-white-100 text-lg leading-relaxed mb-8">
          Welcome to our company! We are dedicated to providing the best service
          possible. Our team is composed of highly skilled professionals who are
          passionate about what they do. We believe in building strong
          relationships with our clients and always strive to exceed their
          expectations. Thank you for taking the time to learn more about us. We
          look forward to working with you!
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold  mb-2 text-gray-200">
            Our Essence
          </h3>
          <p className="text-white-100 text-lg leading-relaxed">
            Our essence lies in our commitment to excellence and integrity. We
            prioritize quality in everything we do and ensure that our values
            align with our actions. Our culture is built on a foundation of
            trust, respect, and a shared goal of delivering the best possible
            outcomes for our clients.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-gray-300">Ethics</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Ethics are at the core of our business practices. We adhere to the
            highest standards of ethical conduct in all our operations and
            interactions. Our ethical framework guides us in making decisions
            that are fair, transparent, and beneficial for all stakeholders
            involved.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-300  mb-2">
            Innovation
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Innovation drives our progress and shapes our future. We embrace
            change and continuously seek new ways to improve our services and
            products. Our innovative spirit helps us stay ahead of the curve and
            deliver solutions that meet the evolving needs of our clients.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetToKnowUs;
