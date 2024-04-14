import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import OnBoarding from "../screens/OnBoarding";
import Workout from "../screens/Workout";
import FitScreen from "../screens/FitScreen";
import Rest from "../screens/Rest";
const AppStack = ({ showBoardingScreen }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={showBoardingScreen ? "OnBoarding" : "Home"}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="FitScreen"
        component={FitScreen}
        options={{ animation: "slide_from_bottom" }}
      />

      <Stack.Screen name="Rest" component={Rest} />
    </Stack.Navigator>
  );
};

export default AppStack;
