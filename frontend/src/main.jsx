import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_da from "./translations/da/global.json";
import global_ro from "./translations/ro/global.json";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "da",
  resources: {
    en: {
      global: global_en,
    },
    da: {
      global: global_da,
    },
    ro: {
      global: global_ro,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
