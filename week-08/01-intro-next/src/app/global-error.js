"use client";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Uh oh! Page not found! Error: 404</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again?</button>
      </body>
    </html>
  );
}
