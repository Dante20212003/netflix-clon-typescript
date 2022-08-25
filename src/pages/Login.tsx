import React from "react";
import NetflixInfo from "../components/Main/NetflixInfo";
import { Button, Container } from "../utils/styled.components";

import NetflixBackground from "../assets/netflix_background.jpg";
import Topbar from "../components/Main/Topbar";
import Formulario from "../components/Login/Formulario";
import "../assets/styles/login.css";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <Container img={NetflixBackground} fullHeight bottom className="fullheight">
      <Topbar logo={true}>
        <Button padding={[0.5, 1]}>Registrarse</Button>
      </Topbar>
      <Container center width={45}>
        <Formulario />
      </Container>
      <div className="footer-login">
        <div className="overlay-footer"></div>

        <div className="footer-abs">
          <Footer />
        </div>
      </div>
    </Container>
  );
};

export default Login;
