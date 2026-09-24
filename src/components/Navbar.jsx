"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ planCount = 0, savedCount = 0 }) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header
      className="border-b bg-transparent"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={28}
            height={28}
            className="object-contain"
          />

          <span className="font-display text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-xs transition ${
              isHome ? "font-medium" : "hover:bg-white/5"
            }`}
            style={{
              backgroundColor: isHome ? "#182400" : "transparent",
              color: isHome ? "#c8ff00" : "#c8ff00",
            }}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs transition ${
              isMyPlan
                ? "font-medium text-[#c8ff00]"
                : "text-white hover:bg-white/5"
            }`}
            style={isMyPlan ? { backgroundColor: "#182400" } : undefined}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-xs sm:gap-4">
          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-white/60">Plan</span>
            <span
              className="flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {planCount}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-white/60">Saved</span>
            <span
              className="flex h-5 min-w-5 items-center justify-center rounded-full border px-1.5 text-[10px] text-white"
              style={{ borderColor: "var(--border)" }}
            >
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
