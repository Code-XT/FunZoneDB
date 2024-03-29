import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FunZoneDB",
  description: "One stop for all your entertainment needs!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header>
            <Header />
          </header>
          <div className="flex-grow p-0 flex">
            {/* Navbar */}
            <Navbar className="min-w-1/5" />

            {/* Right Content Area */}
            <div className="flex-grow max-h-screen overflow-y-auto w-4/5 ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
