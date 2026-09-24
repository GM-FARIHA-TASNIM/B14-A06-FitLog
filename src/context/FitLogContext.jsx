"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [plan, saved, ready]);

  function addToPlan(id) {
    if (plan.includes(id)) {
      toast.info("Already added to today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.error("You can add up to 5 exercises.");
      return;
    }

    setPlan((current) => [...current, id]);
    toast.success("Added to today's plan.");
  }

  function removeFromPlan(id) {
    setPlan((current) => current.filter((item) => item !== id));
    toast.success("Removed from today's plan.");
  }

  function saveWorkout(id) {
    if (saved.includes(id)) {
      setSaved((current) => current.filter((item) => item !== id));
      toast.success("Removed from saved workouts.");
      return;
    }

    setSaved((current) => [...current, id]);
    toast.success("Saved for later.");
  }

  function isInPlan(id) {
    return plan.includes(id);
  }

  function isSaved(id) {
    return saved.includes(id);
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        ready,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}
