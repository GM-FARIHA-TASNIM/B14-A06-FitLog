"use client";

import { useEffect, useMemo, useState } from "react";
import { getWorkouts } from "@/lib/api";
import { useFitLog } from "@/context/FitLogContext";
import PlanWorkoutCard from "./PlanWorkoutCard";

export default function MyPlan() {
  const { plan, saved, ready } = useFitLog();

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("plan");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  const planWorkouts = useMemo(() => {
    return workouts.filter((workout) => plan.includes(workout.id));
  }, [workouts, plan]);

  const savedWorkouts = useMemo(() => {
    return workouts.filter((workout) => saved.includes(workout.id));
  }, [workouts, saved]);

  const visibleWorkouts = useMemo(() => {
    const list = tab === "plan" ? [...planWorkouts] : [...savedWorkouts];

    if (sortBy === "duration") {
      list.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      list.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [tab, planWorkouts, savedWorkouts, sortBy]);

  const totalMinutes = planWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = planWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  if (loading || !ready) {
    return (
      <div className="py-20 text-center text-sm text-white/50">
        Loading workouts…
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <div
          className="rounded-xl border bg-[#111419] p-5"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs uppercase text-white/40">Exercises</p>
          <p className="mt-2 font-display text-4xl font-bold">
            {planWorkouts.length}
          </p>
        </div>

        <div
          className="rounded-xl border bg-[#111419] p-5"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs uppercase text-white/40">Minutes</p>
          <p className="mt-2 font-display text-4xl font-bold">{totalMinutes}</p>
        </div>

        <div
          className="rounded-xl border bg-[#111419] p-5"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs uppercase text-white/40">Calories</p>
          <p className="mt-2 font-display text-4xl font-bold">
            {totalCalories}
          </p>
        </div>
      </div>

      <div
        className="mt-10 flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex gap-2">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-full px-4 py-2 text-xs ${
              tab === "plan" ? "text-black" : "text-white/50 hover:text-white"
            }`}
            style={
              tab === "plan" ? { backgroundColor: "var(--accent)" } : undefined
            }
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-full px-4 py-2 text-xs ${
              tab === "saved" ? "text-black" : "text-white/50 hover:text-white"
            }`}
            style={
              tab === "saved" ? { backgroundColor: "var(--accent)" } : undefined
            }
          >
            Saved
          </button>
        </div>

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="rounded-md border bg-[#111419] px-3 py-2 text-xs text-white outline-none"
          style={{ borderColor: "var(--border)" }}
        >
          <option value="default">Sort by</option>
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="mt-6 space-y-4">
        {visibleWorkouts.length > 0 ? (
          visibleWorkouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              savedTab={tab === "saved"}
            />
          ))
        ) : (
          <div
            className="rounded-xl border bg-[#111419] px-6 py-16 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="font-display text-3xl font-bold uppercase">
              {tab === "plan"
                ? "Your plan is empty."
                : "No saved workouts yet."}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">
              {tab === "plan"
                ? "Add workouts from the library to build your plan for today."
                : "Save workouts from the library and come back to them later."}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
