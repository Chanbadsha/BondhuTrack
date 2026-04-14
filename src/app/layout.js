import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import FriendsProvider from "./lib/Context/FriendsProvider";

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
        <FriendsProvider>
          <NavBar></NavBar>
          <main className="flex-1 flex flex-col"> {children}</main>
          <Footer />
        </FriendsProvider>
      </body>
    </html>
  );
}
