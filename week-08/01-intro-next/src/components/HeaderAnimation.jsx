"use client";

import { motion } from "motion/react";
import headerStyles from "./Header.module.css";
import Link from "next/link";

export default function HeaderAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0.25, scale: 0.01 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <Link href={"/"}>
        <h1 className={headerStyles.main_title}>NextJS workshops!</h1>
      </Link>
    </motion.div>
  );
}
