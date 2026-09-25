import Link from "next/link";
import { ArrowLeft, Clock, Flame, Star } from "lucide-react";
import { getWorkout } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[60vh] items-center justify-center px-5">
          <div className="text-center">
            <p
              className="text-xs font-bold tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              404
            </p>

            <h1 className="mt-3 font-display text-4xl font-bold uppercase">
              Workout not found
            </h1>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-md px-5 py-3 text-xs font-bold uppercase text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Back to Library
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to library
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div
            className="overflow-hidden rounded-2xl border bg-[#111419] lg:sticky lg:top-24 lg:self-start"
            style={{ borderColor: "var(--border)" }}
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full px-3 py-1 text-xs font-semibold text-black"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-4 leading-7 text-white/60">
              {workout.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-5 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {workout.duration} min
              </span>

              <span className="flex items-center gap-1.5">
                <Flame size={15} />
                {workout.caloriesBurned} kcal
              </span>

              <span className="flex items-center gap-1.5">
                <Star size={15} />
                {workout.rating}
              </span>
            </div>

            <dl
              className="mt-8 divide-y rounded-xl border bg-[#111419]"
              style={{ borderColor: "var(--border)" }}
            >
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 px-5 py-3 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <dt className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    {label}
                  </dt>

                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-8 font-display text-xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-lg border bg-[#111419] p-4 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-bold text-black"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {index + 1}
                  </span>

                  <span className="pt-1 text-white/60">{step}</span>
                </li>
              ))}
            </ol>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
