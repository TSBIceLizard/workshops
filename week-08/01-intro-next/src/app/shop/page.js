//TODO: I want to render the text of my page first and render the slow items component later!

import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <>
      <h2>Shop</h2>
      <p>
        All images will be scribbled upon by the artist! Do not let this unique
        phenomenon pass you by!
      </p>
      {/* Shop Items */}
      <Suspense
        fallback={
          "Loading shop items! WAIT FOR IT YOU LAZY BUGGER! YOU CANNOT AFFORD TO LET THIS UNIQUE PHENOMENON MISS YOU, THAT IS A COMMAND!"
        }
      >
        <SlowComponent />
      </Suspense>
    </>
  );
}
