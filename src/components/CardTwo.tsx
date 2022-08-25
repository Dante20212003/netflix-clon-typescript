import { Container } from "../utils/styled.components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Tel from "../assets/cards/movil.jpg";
import Boxshot from "../assets/cards/boxshot.png";
import Loading from "../assets/cards/download-animation.gif";

const CardTwo = () => {
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
            <div className="card padding-4 aling-reverse">
              <div className="card-text text-center">
                <h3 className="card-title">
                  Descarga tus series para verlas offline.
                </h3>
                <p className="card-info">
                  Guarda tu contenido favorito y tendrás siempre algo para ver.
                </p>
              </div>

              <div className="card-thumb margin-t-0">
                <img src={Tel} className="card-image-no-abs" alt="" />

                <div className="card-img-animation">
                  <img src={Boxshot} className="image-animation" alt="" />
                  <div className="cart-text-animation">
                    <p className="card-title-animation">Stranger Things</p>
                    <p className="card-title-animation-download">
                      Descargando ...
                    </p>
                  </div>

                  <img className="animation" src={Loading} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </Container>
  );
};

export default CardTwo;
