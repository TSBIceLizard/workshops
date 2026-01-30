"use client";

import { motion } from "motion/react";
// import homeStyles from "@/app/home.module.css";
import titleStyles from "./TitleAnimation.module.css";

export default function TitleAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0.25, scale: 0.01 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
    >
      <h2 className={titleStyles.home_title}>Next.JS!</h2>
    </motion.div>
  );
}
