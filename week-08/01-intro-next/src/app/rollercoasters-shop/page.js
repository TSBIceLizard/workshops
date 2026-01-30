//This page is the sacrificial lamb, we'll break this route to show if our error page works

export default function RollerCoastersShopPage() {
  throw new Error(
    "Error detected! Rollercoaster missing? !!! Who would steal apparatus like that!",
  );
  return (
    <>
      <h2>Shop</h2>
      <p>
        Don&apos;t get dizzy looking at these incredible cash money value for
        money prices!
      </p>
    </>
  );
}
