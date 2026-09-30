import { Fraunces, Urbanist } from "next/font/google";
import "./landing.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-tea-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-tea-serif",
  display: "swap",
});

export default function TeaGuideLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={[urbanist.variable, fraunces.variable].join(" ")}>
      {children}
    </div>
  );
}
