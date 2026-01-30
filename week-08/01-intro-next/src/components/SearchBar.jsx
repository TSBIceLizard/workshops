//! THIS IS A CLIENT COMPONENT
"use client";

//TODO: Have a search bar with a search that updates based on our user input
//events: onChange, onSubmit
//state: store input with some persistance
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function handleSubmit() {
    //submit search logic
  }

  function handleChange() {
    //logic
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="searchbar" />
      </form>
    </>
  );
}
