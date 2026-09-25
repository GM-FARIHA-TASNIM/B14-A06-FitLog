"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const PLAN_CAP = 5;
const STORAGE_KEY = "fitlog:v1";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [state, setState] = useState({
    plan: [],
    saved: [],
    done: [],
  });

  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setState({
          plan: [],
          saved: [],
          done: [],
          ...JSON.parse(stored),
        });
      }
    } catch {
      // ignore broken local storage
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);

  function addToPlan(id) {
    if (state.plan.includes(id)) {
      toast.info("Already in today's plan.");
      return false;
    }

    if (state.plan.length >= PLAN_CAP) {
      toast.error("You can add up to 5 exercises.");
      return false;
    }

    setState((current) => ({
      ...current,
      plan: [...current.plan, id],
    }));

    toast.success("Added to today's plan.");
    return true;
  }

  function addToSaved(id) {
    if (state.saved.includes(id)) {
      toast.info("Already in your saved list.");
      return false;
    }

    setState((current) => ({
      ...current,
      saved: [...current.saved, id],
    }));

    toast.success("Saved for later.");
    return true;
  }

  function removeFromPlan(id) {
    setState((current) => ({
      ...current,
      plan: current.plan.filter((item) => item !== id),
      done: current.done.filter((item) => item !== id),
    }));

    toast.success("Workout removed.");
  }

  function removeFromSaved(id) {
    setState((current) => ({
      ...current,
      saved: current.saved.filter((item) => item !== id),
    }));

    toast.success("Removed from saved.");
  }

  function markDone(id) {
    setState((current) => {
      if (current.done.includes(id)) {
        return current;
      }

      return {
        ...current,
        done: [...current.done, id],
      };
    });

    toast.success("Workout marked as done.");
  }

  function isInPlan(id) {
    return state.plan.includes(id);
  }

  function isSaved(id) {
    return state.saved.includes(id);
  }

  return (
    <FitLogContext.Provider
      value={{
        ...state,
        ready,
        planCap: PLAN_CAP,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}
