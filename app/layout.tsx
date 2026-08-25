import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field / Book — Seasonal Crop Planner",
  description: "A quiet fieldbook for choosing crops and planning the next useful visit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
