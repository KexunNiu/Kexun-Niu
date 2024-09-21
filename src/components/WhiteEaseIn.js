import React from "react";
import { motion } from "framer-motion";

const WhiteEaseIn = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }} // Starts at fully white
      animate={{ opacity: 0, pointerEvents: "none" }} // Fades to transparent
      transition={{ duration: 2, ease: "easeOut" }} // Adjust the duration as needed
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        zIndex: 9999, // Ensure it covers the entire page during the transition
        pointerEvents: "auto",
      }}
    />
  );
};

export default WhiteEaseIn;
