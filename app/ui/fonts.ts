import { Merriweather } from "next/font/google";
import { Inter } from "next/font/google";

export const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});