import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import FriendsProvider from "./lib/Context/FriendsProvider";
import InterActionProvider from "./lib/Context/InterActionProvider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BondhuTrack | Track Your Friendships",
  description:
    "BondhuTrack helps you stay connected with your friends by tracking interactions, setting reminders, and maintaining meaningful relationships effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">
        <InterActionProvider>
          <FriendsProvider>
            <div className="fixed z-10 top-0 left-0 w-full">
              <NavBar></NavBar>
              <Toaster
                position="top-center"
                toastOptions={{ style: { textAlign: "center" } }}
              />
              <Analytics />
            </div>
            <main className="flex-1 mt-17 flex flex-col"> {children}</main>
            <Footer />
          </FriendsProvider>
        </InterActionProvider>
      </body>
    </html>
  );
}
