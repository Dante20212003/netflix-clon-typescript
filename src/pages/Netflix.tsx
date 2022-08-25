import { useState, useEffect } from "react";
import { getDataDeletes, getDataTitles } from "../utils/Fetchs";

import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";
import CardFor from "../components/CardFor";

const Netflix = () => {
  const [limit, setLimit] = useState(100);

  const getData = () => {
    /* getDataDeletes(limit);
    getDataTitles(limit); */
  };

  useEffect(() => getData(), []);

  return (
    <div>
      <Header />

      <CardOne />

      <CardTwo />

      <CardThree />

      <CardFor />

      <Faq />

      <Footer />
    </div>
  );
};

export default Netflix;

/* 
<div className="fondo">
      <div className="overlay">
        <div className="container contenido">
          <div className="topbar">
            <div className="logo">
              <img
                className="netlix-logo"
                src={NetflixLogo}
                alt="Logo Netlix"
              />
            </div>

            <div className="botones-topbar">
              <select className="select-idioma">
                <option value="esp">Espanol</option>
                <option value="en">Ingles</option>
              </select>

              <button className="btn">Iniciar sesion</button>
            </div>
          </div>

          <div className="container-info">
            <div className="info">
              <h1 className="info-title">
                Películas y series ilimitadas y mucho más.
              </h1>
              <p className="info-description">
                Disfruta donde quieras. Cancela cuando quieras.
              </p>
              <p className="info-description2">
                ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta
                o reiniciar tu membresía de Netflix.
              </p>

              <div className="info-action">
                <input className="info-input" type="text" placeholder="Email" />

                <button className="btn-info">Comenzar &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background" src={NetflixBackground} alt="" />
    </div>
*/
