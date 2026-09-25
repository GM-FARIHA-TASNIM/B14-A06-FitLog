"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header
      className="sticky top-0 z-40 border-b bg-[#0b0d0f]/90 backdrop-blur"
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-y-3 px-4 py-4 sm:px-6 md:grid-cols-3">
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

        <div className="col-span-2 flex justify-center gap-1 md:col-span-1 md:col-start-2">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              isHome
                ? "bg-[#252e04] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              isMyPlan
                ? "bg-[#252e04] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2 text-white">
            Plan
            <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#c8ff00] px-1.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            Saved
            <span
              className="grid h-6 min-w-6 place-items-center rounded-full border px-1.5 text-xs font-semibold text-white"
              style={{ borderColor: "var(--border)" }}
            >
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
