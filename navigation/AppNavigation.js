import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import OnBoarding from "../screens/OnBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Workout from "../screens/Workout";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const [showBoardingScreen, setShowBoardingScreen] = useState(null);

  const getOnBoardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("onBoarded");
      console.log("onBoardingStatus", value);
      if (value === "1") {
        setShowBoardingScreen(false);
      } else {
        setShowBoardingScreen(true);
      }
    } catch (e) {
      console.log("onBoardingStatus", e);
    }
  };

  useEffect(() => {
    getOnBoardingStatus();
  }, []);

  if (showBoardingScreen === null) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log("showBoardingScreen", showBoardingScreen);

  if (showBoardingScreen) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="OnBoarding"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Workout" component={Workout} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteNarme="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Workout" component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
