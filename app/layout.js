import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });
//"./wheat-fields-4439896_1280.jpg"
export const metadata = {
  title: "FarmHelp",
  description: "Generated by create next app",
  icons:{
    icon:"./logoFarm.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
