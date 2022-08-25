import { useEffect, useState } from "react";
import { Container } from "../utils/styled.components";
import VidDevices from "../assets/cards/video-devices.mp4";
import Devices from "../assets/cards/devices.png";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const CardThree = () => {
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
            <div className="card padding-5 margin-b-12">
              <div className="card-text text-center">
                <h3 className="card-title">Disfruta donde quieras.</h3>
                <p className="card-info">
                  Películas y series ilimitadas en tu teléfono, tablet,
                  computadora y TV sin costo adicional.
                </p>
              </div>

              <div className="card-thumb margin-t-5 margin-r-t-5">
                <div className="card-video-two">
                  <video
                    src={VidDevices}
                    className="card-video-two"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>

                <img src={Devices} className="card-image-two" alt="" />
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </Container>
  );
};

export default CardThree;
