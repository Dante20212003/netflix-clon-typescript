import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "../utils/styled.components";
import Tv from "../assets/cards/tv.png";
import VidNetlix from "../assets/cards/video-netflix.mp4";

const CardOne = () => {
  const [execute, setExecute] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.8,
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
        x: "-100%",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <Container bottom>
      <div ref={ref}>
        <motion.div animate={animation}>
          <Container center>
            <div className="card padding-5 margin-b-8">
              <div className="card-text text-center">
                <h3 className="card-title">Disfruta en tu TV.</h3>
                <p className="card-info">
                  Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
                  reproductores de Blu-ray y más.
                </p>
              </div>

              <div className="card-thumb margin-t-5">
                <div className="card-video  ">
                  <video
                    src={VidNetlix}
                    className="card-video w-25"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>

                <img src={Tv} className="card-image" alt="" />
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </Container>
  );
};

export default CardOne;
