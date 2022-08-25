import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { Container } from "../utils/styled.components";
import Ninos from "../assets/cards/ninons.png";

const CardFor = () => {
  const [execute, setExecute] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView && !execute) {
      setExecute(true);
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }

    if (!inView && !execute) {
      animation.start({
        x: "100%",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <Container bottom>
      <div ref={ref}>
        <motion.div animate={animation}>
          <Container center>
            <div className="card padding-4 aling-reverse margin-b-5">
              <div className="card-text text-center">
                <h3 className="card-title">
                  Descarga tus series para verlas offline.
                </h3>
                <p className="card-info">
                  Guarda tu contenido favorito y tendrás siempre algo para ver.
                </p>
              </div>

              <div className="card-thumb margin-t-0">
                <img src={Ninos} className="card-image-no-abs" alt="" />
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </Container>
  );
};

export default CardFor;
