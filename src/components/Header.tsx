import { Container } from "../utils/styled.components";
import NetflixInfo from "./Main/NetflixInfo";
import Topbar from "./Main/Topbar";
import NetflixBackground from "../assets/netflix_background.jpg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Container img={NetflixBackground} height={55} bottom>
      <Topbar logo={false} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "100vh" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <NetflixInfo />
      </motion.div>
    </Container>
  );
};

export default Header;
