import { Geist, Silkscreen, Geist_Mono, Jersey_10 } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const jersey = Jersey_10({
  variable: "--font-jersey",
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap'
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const gist = geistSans.variable
export const gist_mono = geistMono.variable
export const jer = jersey.variable