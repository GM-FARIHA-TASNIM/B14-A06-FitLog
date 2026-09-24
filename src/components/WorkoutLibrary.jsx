import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="mb-8">
        <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
          The Library
        </h2>

        <p className="mt-2 text-sm text-white/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
