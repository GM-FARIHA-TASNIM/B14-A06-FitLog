"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { toast } from "sonner";
import { useFitLog } from "@/context/FitLogContext";

export default function PlanWorkoutCard({ workout, savedTab = false }) {
  const { removeFromPlan, saveWorkout } = useFitLog();

  function handleDone() {
    removeFromPlan(workout.id);
    toast.success(`${workout.name} marked as done.`);
  }

  function handleRemoveSaved() {
    saveWorkout(workout.id);
  }

  return (
    <article
      className="grid gap-5 rounded-xl border bg-[#111419] p-4 sm:grid-cols-[180px_1fr_auto]"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="relative h-40 overflow-hidden rounded-lg sm:h-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full px-2 py-1 text-[9px] font-bold uppercase text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold uppercase">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-white/50">{workout.equipment}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <Clock3 size={13} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={13} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={13} />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:justify-center">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-md border px-4 py-2 text-[10px] font-bold uppercase text-white hover:bg-white/5"
          style={{ borderColor: "var(--border)" }}
        >
          View Details
        </Link>

        {savedTab ? (
          <button
            onClick={handleRemoveSaved}
            className="inline-flex items-center gap-1 rounded-md border px-4 py-2 text-[10px] font-bold uppercase text-white/60 hover:text-white"
            style={{ borderColor: "var(--border)" }}
          >
            <X size={13} />
            Remove
          </button>
        ) : (
          <>
            <button
              onClick={handleDone}
              className="inline-flex items-center gap-1 rounded-md px-4 py-2 text-[10px] font-bold uppercase text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <Check size={13} />
              Mark as Done
            </button>

            <button
              onClick={() => removeFromPlan(workout.id)}
              className="inline-flex items-center gap-1 rounded-md border px-4 py-2 text-[10px] font-bold uppercase text-white/60 hover:text-white"
              style={{ borderColor: "var(--border)" }}
            >
              <X size={13} />
              Remove
            </button>
          </>
        )}
      </div>
    </article>
  );
}
