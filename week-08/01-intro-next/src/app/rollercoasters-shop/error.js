// Error pages are client side
"use client";
import Link from "next/link";

export default function RollerShopError() {
  return (
    <>
      <h2>
        Woopsie daisy! Rollercoaster broken! Never to mind though, you will get
        a refund, don&apos;t worry!
      </h2>
      <p>{error.message}</p>
      <Link href={"/"}>Come on, let&apos;s go home.</Link>
    </>
  );
}
