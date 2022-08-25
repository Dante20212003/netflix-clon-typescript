import React from "react";

const SendEmail = () => {
  return (
    <>
      <p className="info-description-two text-center">
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </p>

      <div className="info-action">
        <input className="info-input" type="text" placeholder="Email" />

        <button className="btn-info">Comenzar &gt;</button>
      </div>
    </>
  );
};

export default SendEmail;
