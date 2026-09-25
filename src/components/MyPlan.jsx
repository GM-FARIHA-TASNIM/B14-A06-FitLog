"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Clock, Dumbbell, Flame, Search, X } from "lucide-react";
import { getWorkouts } from "@/lib/api";
import { useFitLog } from "@/context/FitLogContext";
import { Stats } from "@/components/WorkoutCard";

export default function MyPlan() {
  const { plan, saved, done, removeFromPlan, removeFromSaved, markDone } =
    useFitLog();

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("plan");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const planned = workouts.filter((workout) => plan.includes(workout.id));

  const ids = tab === "plan" ? plan : saved;

  const query = search.trim().toLowerCase();

  const list = workouts
    .filter((workout) => ids.includes(workout.id))
    .filter(
      (workout) =>
        !query ||
        workout.name.toLowerCase().includes(query) ||
        workout.muscleGroups.some((muscle) =>
          muscle.toLowerCase().includes(query),
        ),
    );

  const minutes = planned.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const calories = planned.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const metrics = [
    {
      label: "Exercises",
      value: planned.length,
      icon: Dumbbell,
    },
    {
      label: "Minutes",
      value: minutes,
      icon: Clock,
    },
    {
      label: "Calories",
      value: calories,
      icon: Flame,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p
        className="text-xs font-semibold tracking-[0.2em]"
        style={{ color: "var(--accent)" }}
      >
        YOUR WORKOUTS
      </p>

      <h1 className="mt-3 font-display text-4xl font-bold uppercase sm:text-5xl">
        My Plan
      </h1>

      <p className="mt-1 text-sm text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border bg-[#111419] p-4 sm:p-5"
            style={{ borderColor: "var(--border)" }}
          >
            <Icon size={16} style={{ color: "var(--accent)" }} />

            <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              {value}
            </p>

            <p className="text-xs uppercase tracking-wider text-white/50">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="inline-flex w-fit rounded-full border bg-[#111419] p-1"
          style={{ borderColor: "var(--border)" }}
        >
          <button
            onClick={() => setTab("plan")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              tab === "plan"
                ? "bg-[#c8ff00] text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            Today&apos;s Plan ({plan.length})
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              tab === "saved"
                ? "bg-[#c8ff00] text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        <div className="relative sm:w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name or tag"
            className="w-full rounded-md border bg-[#111419] py-2 pl-9 pr-3 text-sm outline-none focus:border-[#c8ff00]"
            style={{ borderColor: "var(--border)" }}
          />
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="py-16 text-center text-white/50">Loading workouts…</p>
        ) : list.length === 0 ? (
          <div
            className="rounded-xl border border-dashed py-16 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="font-display text-2xl font-bold uppercase">
              Nothing here yet
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-md px-5 py-2.5 text-sm font-bold uppercase text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {list.map((workout) => {
              const isDone = tab === "plan" && done.includes(workout.id);

              return (
                <li
                  key={workout.id}
                  className={`flex flex-col gap-4 rounded-xl border bg-[#111419] p-3 sm:flex-row sm:items-center ${
                    isDone ? "border-[#c8ff00]/50" : ""
                  }`}
                  style={!isDone ? { borderColor: "var(--border)" } : undefined}
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-20 w-20 shrink-0 rounded-lg object-cover"
                    />

                    <div className="min-w-0">
                      <h3
                        className={`truncate font-display text-lg font-bold uppercase ${
                          isDone ? "text-white/40 line-through" : ""
                        }`}
                      >
                        {workout.name}
                      </h3>

                      <p className="text-xs text-white/50">
                        {workout.equipment}
                      </p>

                      <Stats workout={workout} className="mt-2" />
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="rounded-md border px-3 py-2 text-xs font-semibold hover:border-[#c8ff00] hover:text-[#c8ff00]"
                      style={{ borderColor: "var(--border)" }}
                    >
                      View Details
                    </Link>

                    {tab === "plan" && (
                      <button
                        disabled={isDone}
                        onClick={() => markDone(workout.id)}
                        className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-bold text-black disabled:opacity-50"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        <Check size={14} />

                        {isDone ? "Done" : "Mark as Done"}
                      </button>
                    )}

                    <button
                      aria-label="Remove"
                      onClick={() => {
                        if (tab === "plan") {
                          removeFromPlan(workout.id);
                        } else {
                          removeFromSaved(workout.id);
                        }
                      }}
                      className="grid h-8 w-8 place-items-center rounded-md border text-white/50 hover:border-red-500 hover:text-red-400"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
