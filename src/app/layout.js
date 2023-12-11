import { inter } from "./font";
import "./globals.css";
import { ThemeProvider } from "@/Theme/ThemeProvider";
import { ThemeSwitcher } from "@/Theme/ThemeSwitcher";



export const metadata = {
  title: "Rashed's Portfolio",
  description: "MERN Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"  >
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
