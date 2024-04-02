import { ExerciseContextProvider } from "./context/ExerciseContext";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <ExerciseContextProvider>
      <AppNavigation />
    </ExerciseContextProvider>
  );
}
