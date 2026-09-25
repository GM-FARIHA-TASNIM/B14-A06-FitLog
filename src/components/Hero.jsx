import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mt-8 grid items-center gap-8 overflow-hidden rounded-2xl bg-[#111419] px-6 py-10 sm:px-12 md:grid-cols-2 md:py-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#c8ff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center rounded-md px-6 py-3 text-sm font-bold uppercase transition hover:brightness-110"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000000",
            }}
          >
            Browse Workouts
          </Link>
        </div>

        <div className="relative h-72 md:h-96">
          <Image
            src="/banner.png"
            alt="Workout banner"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="translate-y-12 object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
