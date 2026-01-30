"use client";
//We need to specify "use client" for components. We don't have to do the same for server components as they are use "use server" by default

//!Recommended! Always nest client components nested inside server components!

//TODO: an event to click the button
//We'll require an onClick event for this
import { useState } from "react";

export default function MainItemButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  //   fetch("route.js",)
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>People that read the article: {count}</p>
    </>
  );
}
