import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: 'Next Hero - %s'
  },
  description: "mitas hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-base-200" data-theme="darkTheme">
      <body className={`${inter.className}`}>
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
