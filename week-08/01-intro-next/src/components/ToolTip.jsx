import * as Tooltip from "@radix-ui/react-tooltip";

export default function ToolTip() {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <button>ROLLERCOASTERS BABY</button>{" "}
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content>
              <section>
                <h3>Rollercoasters</h3>
                <p>
                  These are mechanical structure apparatuses designed
                  exclusively at fun venues in order to go WOOSH
                </p>
              </section>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
