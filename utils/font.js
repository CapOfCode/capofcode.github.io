import { Geist, Silkscreen, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap'
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const gist = geistSans.variable
export const gist_mono = geistMono.variable
export const slik = silkscreen.variable