import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Abu Bakar Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}