import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"

const rubik = localFont({
  src: [
    {
      path: "./fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal"
    },
    {
      path: "./fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Rubik-Light.ttf",
      weight: "300",
      style: "normal"
    },
  ],
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  title: "Ohiole's Interactive Comments Page",
  description: "A frontend mentor project using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rubik.variable}
      >
        {children}
      </body>
    </html>
  );
}
