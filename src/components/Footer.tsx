import { Container, Option, Select } from "../utils/styled.components";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <Container>
      <Container center>
        <div className="footer">
          <p className="footer-title">
            ¿Preguntas? Llama al +1 (408) 329-9558 (USA)
          </p>
          <div className="footer-grid-container">
            <div className="footer-links">
              <p>Preguntas frecuentes</p>
              <p>Relaciones con inversionistas</p>
              <p>Privacidad</p>
              <p>Prueba de velocidad</p>
            </div>

            <div className="footer-links">
              <p>Centro de ayuda</p>
              <p>Empleo</p>
              <p>Preferencias de cookies</p>
              <p>Avisos legales</p>
            </div>

            <div className="footer-links">
              <p>Centro de ayuda</p>
              <p>Empleo</p>
              <p>Preferencias de cookies</p>
              <p>Avisos legales</p>
            </div>

            <div className="footer-links">
              <p>Cuenta</p>
              <p>Formas de ver</p>
              <p>Información corporativa</p>
              <p>Solo en Netflix</p>
            </div>

            <div className="footer-links">
              <p>Prensa</p>
              <p>Términos de uso</p>
              <p>Contáctanos</p>
            </div>
          </div>

          <Select padding={[1, 2]}>
            <Option value="esp">Espanol</Option>
            <Option value="en">Ingles</Option>
          </Select>

          <p className="footer-netflix">Netflix</p>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
