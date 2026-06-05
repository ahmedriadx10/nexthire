import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";



const manropeFont = Manrope({

  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata = {
  title: "NextHire",
  description: "NextHire - Your Gateway to the Future of Work. Discover top talent and world-class companies in one place. Find your dream job today!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${manropeFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<Navbar/>
        {children}

<Toaster/>
      </body>
    </html>
  );
}
