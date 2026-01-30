import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h2> Error 404: Page not found :( </h2>
      <Link href={"/rollercoasters"} className="text-red-400">
        Take me back to the rollercoasters list!
      </Link>
      <p>Or ...</p>
      <Link href={"/"} className="text-red-400">
        Return me to the homepage!
      </Link>
    </>
  );
}
