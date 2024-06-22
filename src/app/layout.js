import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/services/AuthProvider";

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
    <html lang="en" className="bg-base-200" data-theme="lightTheme">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <div className="">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
