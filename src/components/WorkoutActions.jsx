"use client";

import { Bookmark, Check, Plus } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutActions({ workoutId }) {
  const { plan, ready, addToPlan, saveWorkout, isInPlan, isSaved } =
    useFitLog();

  const inPlan = isInPlan(workoutId);
  const saved = isSaved(workoutId);
  const planFull = plan.length >= 5;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workoutId)}
        disabled={!ready || inPlan || planFull}
        className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-bold uppercase text-black disabled:cursor-not-allowed disabled:opacity-50"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {inPlan ? <Check size={16} /> : <Plus size={16} />}

        {inPlan
          ? "Added to Plan"
          : planFull
            ? "Plan Full"
            : "Add to Today's Plan"}
      </button>

      <button
        onClick={() => saveWorkout(workoutId)}
        disabled={!ready}
        className="inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-white/5"
        style={{ borderColor: "var(--border)" }}
      >
        <Bookmark size={16} />

        {saved ? "Saved" : "Save for Later"}
      </button>
    </div>
  );
}
