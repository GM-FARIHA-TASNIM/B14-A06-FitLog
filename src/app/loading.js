export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0d0f]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"
          style={{
            borderColor: "var(--border)",
            borderTopColor: "var(--accent)",
          }}
        />

        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}
