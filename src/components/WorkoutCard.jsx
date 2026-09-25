import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export function Stats({ workout, className = "" }) {
  return (
    <div
      className={`flex items-center gap-4 text-xs text-white/50 ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <Clock size={14} />
        {workout.duration} min
      </span>

      <span className="flex items-center gap-1.5">
        <Flame size={14} />
        {workout.caloriesBurned} kcal
      </span>

      <span className="flex items-center gap-1.5">
        <Star size={14} fill="currentColor" className="text-[#c8ff00]" />
        {workout.rating}
      </span>
    </div>
  );
}

export function Tags({ items }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-[#111419] transition hover:-translate-y-1"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="aspect-video overflow-hidden bg-[#171a20]">
        <img
          src={workout.image}
          alt={workout.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <Tags items={workout.muscleGroups} />

        <div>
          <h3 className="font-display text-xl font-bold uppercase">
            {workout.name}
          </h3>

          <p className="text-xs text-white/50">{workout.equipment}</p>
        </div>

        <Stats workout={workout} className="mt-auto border-t pt-4" />
      </div>
    </Link>
  );
}
