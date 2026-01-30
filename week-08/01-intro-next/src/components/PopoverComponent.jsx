import * as Popover from "@radix-ui/react-popover";

export default function PopoverComponent() {
  return (
    <Popover.Root className="flex flex-col items-center">
      <Popover.Trigger asChild>
        <button>CLICK ME RIGHT NOW BUDDY!</button>
      </Popover.Trigger>
      .
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <section className="text-emerald-500">
            <h3>Rollercoasters are cash money!</h3>
            <p>And I&apos;m rollin in da dough!</p>
          </section>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
