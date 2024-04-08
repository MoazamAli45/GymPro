import { AuthProvider } from "./context/AuthContext";
import { ExerciseContextProvider } from "./context/ExerciseContext";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <ExerciseContextProvider>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </ExerciseContextProvider>
  );
}
