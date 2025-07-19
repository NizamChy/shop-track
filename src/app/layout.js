import "./globals.css";
import { Roboto_Slab } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const RobotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop Track",
  description: "Manage your business more easily with Shop Track",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RobotoSlab.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
