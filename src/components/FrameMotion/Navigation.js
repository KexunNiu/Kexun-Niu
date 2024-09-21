import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "./styles.css";

import resume from "../../Resume.pdf";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const services = {
  AboutMe: "https://www.kexunniu.com/",
  Resume: resume,
  Bilibili: "https://www.bilibili.com/",
  Gmail: "https://mail.google.com/mail/u/0/#inbox?compose=new",
  LinkedIn: "https://www.linkedin.com/",
  Search: "https://google.com",
  LeetCode: "https://leetcode.com/",
  ChatGPT: "https://chat.openai.com/",
  
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

// Function to traverse the colors forward and backward
const getColorForIndex = (index) => {
  const length = colors.length;
  const cycleIndex = index % (2 * (length - 1));
  return colors[
    cycleIndex < length ? cycleIndex : 2 * (length - 1) - cycleIndex
  ];
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {Object.entries(services).map(([serviceName, url], i) => (
      <MenuItem
        key={i}
        serviceName={serviceName}
        url={url}
        color={getColorForIndex(i)}
      />
    ))}
  </motion.ul>
);
