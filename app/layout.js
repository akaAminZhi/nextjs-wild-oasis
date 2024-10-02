import Header from "./_components/Header";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The wild oasis",
    default: "Welcome / The wild oasis",
  },
  description: "Luxurious cabin hotel located US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${josefin.className} text-primary-100 bg-primary-950 min-h-screen`}
      >
        <Header></Header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
