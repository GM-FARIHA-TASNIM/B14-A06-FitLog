import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-xl border bg-[#111419] transition hover:-translate-y-1"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="font-display text-2xl font-bold uppercase">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-white/50">{workout.equipment}</p>

        <div
          className="mt-5 flex items-center justify-between border-t pt-4 text-[11px] text-white/50"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="flex items-center gap-1">
            <Clock3 size={12} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={12} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={12} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
