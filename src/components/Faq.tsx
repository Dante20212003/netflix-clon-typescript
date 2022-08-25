import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "../utils/styled.components";
import Collapsible from "./Main/Collapsible";
import SendEmail from "./Main/SendEmail";

const Faq = () => {
  const [execute, setExecute] = useState(false);

  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView && !execute) {
      setExecute(true);
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }

    if (!inView && !execute) {
      animation.start({
        opacity: 0,
        y: "-10rem",
      });
    }
  }, [inView]);

  return (
    <Container bottom>
      <div ref={ref}>
        <motion.div animate={animation}>
          <Container width={76} fullWidth>
            <h2 className="faq-title">Preguntas frecuentes</h2>
            <Collapsible title="¿Qué es Netflix?" />
            <Collapsible title="¿Cuánto cuesta Netflix?" />
            <Collapsible title="¿Dónde puedo ver Netflix?" />
            <Collapsible title="¿Cómo cancelo?" />
            <Collapsible title="¿Qué puedo ver en Netflix?" />
            <Collapsible title="¿Es bueno Netflix para los niños?" />
          </Container>

          <Container center>
            <div className="faq-info">
              <SendEmail />
            </div>
          </Container>
        </motion.div>
      </div>
    </Container>
  );
};

export default Faq;
