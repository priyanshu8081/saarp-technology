import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saarp Technology Pvt. Ltd. | IT Solutions & Digital Transformation",
  description: "Saarp Technology delivers reliable IT consulting, cloud solutions, cybersecurity, managed IT services, and software development to help businesses grow.",
};

import FloatingActions from "../components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
