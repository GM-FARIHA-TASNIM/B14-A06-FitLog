import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <div className="grid overflow-hidden rounded-xl  bg-[#111419] md:grid-cols-[58%_42%]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#c8ff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-[62px]">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-white/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex w-fit items-center rounded-md px-6 py-3 text-xs font-bold uppercase tracking-wide text-black"
            style={{ backgroundColor: "var(--accent)", color: "#000000" }}
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
            className="object-contain object-right translate-y-12"
          />
        </div>
      </div>
    </section>
  );
}
