"use client";
import { motion } from "motion/react";

export default function FadeInAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.01 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.875 }}
    >
      {children}
    </motion.div>
  );
}
