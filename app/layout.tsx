import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import FixHeight from "./components/fixHeight";
import { UserProvider } from "@/context/userContext";
import ProtectRoute from "./components/protectRoute";

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
        <body>
          <ProtectRoute />
          
          <div id="wrapper" className="min-h-screen flex flex-col">
            <FixHeight />
            <Header />
            {children}
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
