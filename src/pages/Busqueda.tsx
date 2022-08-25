import React from "react";
import "../assets/styles/busqueda.css";
import { Container } from "../utils/styled.components";
import { motion } from "framer-motion";

const Busqueda = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <Container center>awd</Container>
    </motion.div>
  );
};

export default Busqueda;
