const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load workouts");
  }

  return response.json();
}

export async function getWorkout(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
