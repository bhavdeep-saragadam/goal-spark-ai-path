
import { useState } from "react";
import { Dashboard } from "@/components/dashboard";
import { Onboarding } from "@/components/onboarding";
import { SplashScreen } from "@/components/splash-screen";
import { GoalDetail } from "@/components/goal-detail";
import { Settings } from "@/components/settings";
import { ThemeProvider } from "@/components/theme-provider";

export type AppView = "splash" | "onboarding" | "dashboard" | "goal-detail" | "settings";

export function App() {
  const [currentView, setCurrentView] = useState<AppView>("splash");
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);

  const handleViewChange = (view: AppView, goalId?: string) => {
    if (goalId) {
      setSelectedGoalId(goalId);
    }
    setCurrentView(view);
  };

  return (
    <ThemeProvider>
      {currentView === "splash" && (
        <SplashScreen onComplete={() => handleViewChange("onboarding")} />
      )}

      {currentView === "onboarding" && (
        <Onboarding onComplete={() => handleViewChange("dashboard")} />
      )}

      {currentView === "dashboard" && (
        <Dashboard />
      )}

      {currentView === "goal-detail" && selectedGoalId && (
        <GoalDetail 
          goalId={selectedGoalId} 
          onBack={() => handleViewChange("dashboard")} 
        />
      )}

      {currentView === "settings" && (
        <Settings onBack={() => handleViewChange("dashboard")} />
      )}
    </ThemeProvider>
  );
}
