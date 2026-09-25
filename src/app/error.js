"use client";

export default function Error({ reset }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-5">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl font-bold uppercase">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-white/50">
          We couldn&apos;t load this page. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-md px-6 py-3 text-xs font-bold uppercase text-black"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
