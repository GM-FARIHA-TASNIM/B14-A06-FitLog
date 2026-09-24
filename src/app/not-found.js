import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-5">
      <div className="text-center">
        <p
          className="text-xs font-bold tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          404
        </p>

        <h1 className="mt-3 font-display text-5xl font-bold uppercase">
          Workout not found
        </h1>

        <p className="mt-4 text-sm text-white/50">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-md px-6 py-3 text-xs font-bold uppercase text-black"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Back to Library
        </Link>
      </div>
    </main>
  );
}
