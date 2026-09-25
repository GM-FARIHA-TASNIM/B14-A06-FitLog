import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="mt-20 border-t bg-[#111419]/40"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog" width={18} height={18} />

          <span className="font-display text-sm font-bold text-white">
            FITLOG
          </span>
        </Link>

        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}
