import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import FixHeight from "./components/fixHeight";
import { UserProvider } from "@/context/userContext";
import ProtectRoute from "./components/protectRoute";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import { CartProvider } from "@/context/cartContext";
import Help from "./components/help";

export const metadata: Metadata = {
  title: "Ejae",
  description: "Your style, your way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='light' lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </head>

      <UserProvider>
        <CartProvider>
          <body>
            <ProtectRoute />

            <div id="wrapper" className="min-h-screen flex flex-col">
              <FixHeight />
              <Header />
              {children}
              <Footer />
            </div>

            <ToastContainer />
            <Help />
          </body>
        </CartProvider>
      </UserProvider>
    </html>
  );
}
