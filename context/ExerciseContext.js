import { createContext, useContext, useState } from "react";

const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
  const [exercisesCompleted, setExercisesCompleted] = useState([]);
  const [workouts, setWorkouts] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [time, setTime] = useState(0);

  const value = {
    exercisesCompleted,
    setExercisesCompleted,
    workouts,
    setWorkouts,
    energy,
    setEnergy,
    time,
    setTime,
  };
  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
};

const useExerciseContext = () => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error(
      "useExerciseContext must be used within a ExerciseContextProvider"
    );
  }
  return context;
};

export { ExerciseContextProvider, useExerciseContext };
