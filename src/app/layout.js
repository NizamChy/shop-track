import "./globals.css";
import { Toaster } from "sonner";
import { Roboto_Slab } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { MenuProvider } from "@/context/MenuContext";
import { UserProvider } from "@/context/UserContext";
import { OrderProvider } from "@/context/OrderContext";
import PrivateRoute from "@/components/Auth/PrivateRoute";
import QueryProvider from "@/components/Provider/QueryProvider";
import { OrderHistoryProvider } from "@/context/OrderHistoryContext";
import MobileNavbar from "@/components/Navbar/NavbarMobile";

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
        <QueryProvider>
          <UserProvider>
            <OrderHistoryProvider>
              <MenuProvider>
                <OrderProvider>
                  <Toaster richColors position="top-center" />
                  <Navbar />
                  <PrivateRoute>
                    <div className="pb-20 md:pb-0">{children}</div>
                  </PrivateRoute>
                  <MobileNavbar />
                </OrderProvider>
              </MenuProvider>
            </OrderHistoryProvider>
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
