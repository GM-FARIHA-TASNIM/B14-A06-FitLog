"use client";

import { Bookmark, Plus } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutActions({ workout }) {
  const { plan, ready, addToPlan, addToSaved, isInPlan, isSaved } = useFitLog();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);
  const planFull = plan.length >= 5;

  function handleAdd() {
    addToPlan(workout.id);
  }

  function handleSave() {
    if (saved) {
      return;
    }

    addToSaved(workout.id);
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAdd}
        disabled={!ready || inPlan || planFull}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        style={{ backgroundColor: "var(--accent)" }}
      >
        <Plus size={16} />

        {inPlan
          ? "In today's plan"
          : planFull
            ? "Plan is full (5/5)"
            : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        disabled={!ready || saved}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-6 py-3 text-sm font-bold uppercase transition hover:border-[#c8ff00] hover:text-[#c8ff00] disabled:cursor-not-allowed disabled:opacity-70"
        style={{ borderColor: "var(--border)" }}
      >
        <Bookmark size={16} fill={saved ? "currentColor" : "none"} />

        {saved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
