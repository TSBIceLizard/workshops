//TODO: I want to make this component artificially slow to pretend it takes a long time to render

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SlowComponent() {
  await delay(5000);
  return (
    <>
      <h3>Loaded</h3>
      <ul>
        <li>I am a heavy element</li>
        <li>I am a heavy element</li>
        <li>I am another heavy element</li>
        <li>I am yet another heavy element</li>
      </ul>
    </>
  );
}
