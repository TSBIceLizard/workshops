// import Image from "next/image";
import { Hello } from "../components/Hello";

export default function Home() {
  return (
    <>
      <div>
        <Hello name="Arron" age={36} />
      </div>
    </>
  );
}
