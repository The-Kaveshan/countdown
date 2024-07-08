import { Signika } from "next/font/google";
import "./globals.css";

const inter = Signika({ subsets: ["latin"] });

export const metadata = {
  title: "Birthday Countdown",
  description: "Birthday Countdown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
