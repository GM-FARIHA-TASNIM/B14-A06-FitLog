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
  description:
    "Pick a lift, lock it into today's plan and track the week's work with FitLog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <FitLogProvider>
          {children}

          <Toaster theme="dark" position="bottom-right" richColors />
        </FitLogProvider>
      </body>
    </html>
  );
}
