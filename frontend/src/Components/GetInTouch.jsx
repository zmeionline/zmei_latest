import React from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function GetInTouch() {
  useEffect(() => {
    AOS.init({
      duration: 500, // durata animațiilor în milisecunde
    });
  }, []);

  const { t, i18n } = useTranslation("global");

  return (
    <div data-aos="fade-up" className="mb-36   ">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-gray-200 mb-2">
          {t("getintouch.title")}
        </h1>
        <p className="text-md text-gray-400">{t("getintouch.text")}</p>
      </div>
    </div>
  );
}

export default GetInTouch;
