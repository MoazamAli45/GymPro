import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import OnBoarding from "../screens/OnBoarding";

const AuthStack = ({ showBoardingScreen }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={showBoardingScreen ? "OnBoarding" : "SignUp"}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
