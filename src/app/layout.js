import "./globals.css";
import { Toaster } from "sonner";
import { Roboto_Slab } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { MenuProvider } from "@/context/MenuContext";
import { OrderProvider } from "@/context/OrderContext";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import MobileHeader from "@/components/Navbar/MobileHeader";
import { OrderHistoryProvider } from "@/context/OrderHistoryContext";

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
      <body
        className={`${RobotoSlab.className} bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen`}
      >
        <OrderHistoryProvider>
          <MenuProvider>
            <OrderProvider>
              <Toaster richColors position="top-center" />
              <Navbar />
              <MobileHeader />
              <div className="pb-20 md:pb-0">{children}</div>
              <MobileNavbar />
            </OrderProvider>
          </MenuProvider>
        </OrderHistoryProvider>
      </body>
    </html>
  );
}
