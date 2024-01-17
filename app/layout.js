import "@/styles/globals.css";
import { JetBrains_Mono } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const JBM = JetBrains_Mono({ weight: "200", subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JBM.className}>{children}</body>
    </html>
  );
}
