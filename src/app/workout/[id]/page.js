import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, Flame, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs text-white/50 hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to Library
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-96 overflow-hidden rounded-xl border bg-[#111419]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full px-3 py-1 text-[10px] font-bold uppercase text-black"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-5 text-sm leading-7 text-white/60">
              {workout.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <Clock3 size={15} />
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

            <div
              className="mt-8 overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid grid-cols-2">
                <div
                  className="border-b border-r p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="text-[10px] uppercase text-white/40">
                    Equipment
                  </p>
                  <p className="mt-1 text-sm">{workout.equipment}</p>
                </div>

                <div
                  className="border-b p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="text-[10px] uppercase text-white/40">
                    Difficulty
                  </p>
                  <p className="mt-1 text-sm">{workout.difficulty}</p>
                </div>

                <div
                  className="border-r p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="text-[10px] uppercase text-white/40">Sets</p>
                  <p className="mt-1 text-sm">{workout.sets}</p>
                </div>

                <div className="p-4">
                  <p className="text-[10px] uppercase text-white/40">Reps</p>
                  <p className="mt-1 text-sm">{workout.reps}</p>
                </div>
              </div>
            </div>

            <WorkoutActions workoutId={workout.id} />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold uppercase">
            How to Perform
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workout.instructions.map((instruction, index) => (
              <div
                key={index}
                className="rounded-xl border bg-[#111419] p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-display text-2xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
                </span>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
