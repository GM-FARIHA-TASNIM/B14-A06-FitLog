import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="font-display text-sm font-bold text-white">
          FITLOG
        </Link>

        <p>© 2026 FitLog. Train with intent. Log every set.</p>
      </div>
    </footer>
  );
}
