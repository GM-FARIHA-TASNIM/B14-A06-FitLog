"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [sortBy, setSortBy] = useState("duration");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  const sorted = useMemo(() => {
    const list = [...workouts];

    if (sortBy === "duration") {
      return list.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      return list.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      return list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-16 sm:px-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            The Library
          </h2>

          <p className="text-sm text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm text-white/50">
          Sort By
          <span className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-md border bg-[#111419] py-2 pl-3 pr-9 text-white outline-none focus:border-[#c8ff00]"
              style={{ borderColor: "var(--border)" }}
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </span>
        </label>
      </div>

      {loading && (
        <div className="flex flex-col items-center gap-3 py-24 text-white/50">
          <span
            className="h-10 w-10 animate-spin rounded-full border-4"
            style={{
              borderColor: "var(--border)",
              borderTopColor: "var(--accent)",
            }}
          />

          <p className="text-sm">Loading workouts…</p>
        </div>
      )}

      {error && (
        <p className="py-20 text-center text-red-400">
          Couldn&apos;t load workouts. Try refreshing.
        </p>
      )}

      {!loading && !error && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}
