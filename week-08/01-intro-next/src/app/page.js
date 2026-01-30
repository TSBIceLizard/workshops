//! Next.JS
// the /app folder which this file is in is the root home page folder of the website
// Routing with Next.JS relies on the folder structure for it's multi page setup!!
// The components that go in our routing system need to have the filename of page.js!!!! This is a specific keyword that the build system needs for this to work!
// Eligible file suffixes can be .js, .jsx and another one which i forgot!
import Main from "@/components/Main";
import TitleAnimation from "@/components/TitleAnimation";

export default function HomePage() {
  return (
    <>
      <TitleAnimation />
      <div>
        <Main />
      </div>
    </>
  );
}
