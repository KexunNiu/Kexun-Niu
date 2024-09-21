import * as React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


export const MenuItem = ({ serviceName, url, color }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="menu-item-link"
        style={{ "--underline-color": color }}
      >
        <div className="text-placeholder">
          {serviceName}
        </div>
      </a>
    </motion.li>
  );
};
