export const metadata = {
  title: "TechOptix",
  description: "Welcome to TechOptix",
};

import "./globals.css";
import { CartProvider } from "@/Context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
