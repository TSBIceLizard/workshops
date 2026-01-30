//TODO: create a navigation system
//We are going to use Next Link component
//Server components are the default form of components in NextJS
import Link from "next/link";
import headerStyles from "./Header.module.css";
import SearchBar from "./SearchBar";
import PopoverComponent from "./PopoverComponent";
import HeaderAnimation from "./HeaderAnimation";
import FadeInAnimation from "./FadeInAnimation";
// import ToolTip from "./ToolTip";

// Clerk components for UI
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <HeaderAnimation />
      {/* <h1 className={headerStyles.main_title}>NextJS workshops!</h1> */}
      {/* <img src="#" alt="placeholder" /> */}
      <nav className={headerStyles.nav_bar}>
        <FadeInAnimation>
          <Link href={"/"}>Home</Link>
        </FadeInAnimation>
        <FadeInAnimation>
          <Link href={"/about"}>About</Link>
        </FadeInAnimation>
        <FadeInAnimation>
          <Link href={"/staff"}>Staff</Link>
        </FadeInAnimation>
        <FadeInAnimation>
          <Link href={"/rollercoasters"}>Rollercoasters!</Link>
        </FadeInAnimation>

        {/* <Link href={"signin"}>Sign-in</Link>
        <Link href={"/signup"}>Sign-up</Link> */}
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
      <PopoverComponent />
      <SearchBar />
    </>
  );
}
