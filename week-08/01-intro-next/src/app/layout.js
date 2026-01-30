// import { Geist, Geist_Mono } from "next/font/google";
// Imported font 'Overpass Mono'
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

//Next - customize font
const overpassMono = Overpass_Mono({
  variable: "--bold",
  subsets: ["latin"],
  weight: "300",
});
const overpassMonoBold = Overpass_Mono({
  variable: "--bold",
  subsets: ["latin"],
  weight: "400",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//!==========================================
//! This is where our global metadata lives!!
export const metadata = {
  title: "Week 8 Workshops",
  description:
    "A website amalgamating a veriety of foundational different Next.JS functions, techniques and practices. Topics include static routes, dynamic routes, use server and use client functionality, fetching data from an API and fetching data from a DB",
  openGraph: {
    title: "Week 8 Workshops",
    description:
      "A website amalgamating a veriety of foundational different Next.JS functions, techniques and practices. Topics include static routes, dynamic routes, use server and use client functionality, fetching data from an API and fetching data from a DB",
    type: "website",
    url: "http://localhost:3000",
    images: ["imgurls go in the array here"],
  },
};

//!==========================================

export default function RootLayout({ children }) {
  // we wrap ALL our root layout with <ClerkProvidor>
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${overpassMono.className} ${overpassMonoBold.variable}`}
        >
          <Header />
          {/* children is a keyword that represents all our pages.  It's a placeholder */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
