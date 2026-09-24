import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MyPlan from "@/components/MyPlan";

export default function MyPlanPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-10">
          <p
            className="text-xs font-semibold tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            YOUR WORKOUTS
          </p>

          <h1 className="mt-3 font-display text-5xl font-bold uppercase sm:text-6xl">
            My Plan
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
            Keep today&apos;s training focused and save exercises you want to
            come back to later.
          </p>
        </div>

        <MyPlan />
      </main>

      <Footer />
    </>
  );
}
