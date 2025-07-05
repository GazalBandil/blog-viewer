import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head /> {/* Add things like fonts or meta tags here */}
      <body className="antialiased"> {/* Optional global class */}
        <Main /> {/* This renders the actual React app */}
        <NextScript /> {/* Injects scripts needed for Next.js */}
      </body>
    </Html>
  );
}
