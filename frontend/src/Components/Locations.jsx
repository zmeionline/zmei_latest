import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const GetToKnowUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // durata animațiilor în milisecunde
    });
  }, []);

  const { t } = useTranslation("global");

  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto p-8  text-gray-200 rounded-lg mt-14 mb-40"
      >
        <h2 className="text-3xl mb-6 text-blue-500"> {t("locations.title")}</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          {t("locations.text")}
        </p>
        <div className="  rounded-lg  duration-300 ">
          <p className="text-gray-400 text-lg leading-relaxed ">
            {t("locations.adress")}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed ">
            {t("locations.adress2")}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed ">
            {t("locations.adress3")}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetToKnowUs;
