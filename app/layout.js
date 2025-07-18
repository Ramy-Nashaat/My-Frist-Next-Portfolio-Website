import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-4 left-1/2 flex justify-around align-middle transform -translate-x-1/2 w-[80%] lg:w-[60&] px-8 py-4 border border-gray-300 rounded-3xl text-center bg-white/10 backdrop-blur-md z-[100] shadow-md">
          <div className="text-xl font-bold">David</div>
          <nav className="space-x-4">
            <a href="#Home"className="text-white hover:text-blue-500 transition-colors duration-300">
              Home
            </a>
            <a href="#About" className="text-white hover:text-blue-500 transition-colors duration-300">
              About
            </a>
            <a href="#Projects" className="text-white hover:text-blue-500 transition-colors duration-300">
              Projects
            </a>
            <a href="#Contact" className="text-white hover:text-blue-500 transition-colors duration-300">
              Contact
            </a>
          </nav>
        </header>
        {children}

        <footer className="flex flex-col md:flex-row items-center justify-between px-6 py-4  bg-white/10 text-white">
          {/*  Copyright text */}
          <span className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} David || All Rights Reserved.
          </span>

          {/*  Social icons */}
          <div className="flex gap-6 text-2xl">
            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}
