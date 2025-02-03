
import { gist, gist_mono, jer } from "@/utils/font";
import "./globals.css";
import LenisProvider from "@/utils/lenis";

export const metadata = {
  title: "Rashed's Portfolio",
  description: "Created with love and passion",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LenisProvider>

      <body
        className={`${gist} ${gist_mono} ${jer}  antialiased`}
      >
        {children}
      </body>
      </LenisProvider>
    </html>
  );
}
