import React from "react";
import { Container } from "../../utils/styled.components";
import SendEmail from "./SendEmail";

const NetflixInfo = () => {
  return (
    <Container center={true}>
      <div className="info">
        <h1 className="info-title text-center">
          Películas y series ilimitadas y mucho más.
        </h1>
        <p className="info-description text-center">
          Disfruta donde quieras. Cancela cuando quieras.
        </p>
        <SendEmail />
      </div>
    </Container>
  );
};

export default NetflixInfo;
