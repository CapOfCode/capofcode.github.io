
import { gist, gist_mono, slik } from "@/utils/font";
import "./globals.css";

export const metadata = {
  title: "Rashed's Portfolio",
  description: "Created with love and passion",
};

import {ReactLenis} from "@/utils/lenis"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>

      <body
        className={`${gist} ${gist_mono} ${slik}  antialiased`}
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
