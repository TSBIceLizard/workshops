//Components are server components by default!
import MainItemButton from "./MainItemButton";
import Image from "next/image";
import rollercoasterImg from "@/../public/assets/chris-de-tempe-rollercoaster.jpg";
import mainStyles from "./Main.module.css";
// import ToolTip from "./ToolTip";

export default function Main() {
  // throw new Error("I sabotaged my own page for science!");
  return (
    <>
      <div>
        <h2 className={mainStyles.main_title_section}>Latest:</h2>

        <section className={mainStyles.main_section}>
          <Image
            src="https://images.unsplash.com/photo-1567609894562-d00168e290f6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="rollercoaster looping"
            width={640}
            height={1137}
          />
          <p>
            Etc etc some jibberjabber is articulated in textular formation here
            around about this type of chatter as an example.
          </p>
          <MainItemButton />
        </section>
        <section className={mainStyles.main_section}>
          <Image
            src={rollercoasterImg}
            alt="rollercoaster looping"
            width={640}
            height={1137}
            placeholder="blur"
          />
          <p>
            The second etc etc some jibberjabber is articulated in textular
            formation here around about this type of chatter as an example.
          </p>
          <MainItemButton />
        </section>
      </div>
    </>
  );
}
