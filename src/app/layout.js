import { Oswald } from "next/font/google";
import { Toaster } from "sonner";
import { FitLogProvider } from "@/context/FitLogContext";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <FitLogProvider>
          {children}
          <Toaster position="top-right" theme="dark" richColors />
        </FitLogProvider>
      </body>
    </html>
  );
}
