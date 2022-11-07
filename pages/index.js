import React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";
import { headData } from "../mock/data";

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Gatsby Simplefolio"}</title>
        <html lang={lang || "en"} />
        <meta
          name="description"
          content={description || "Gatsby Simplefolio"}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="app">
        <App />
      </div>
    </>
  );
};
