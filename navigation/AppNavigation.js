import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import OnBoarding from "../screens/OnBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Workout from "../screens/Workout";
import FitScreen from "../screens/FitScreen";
import Rest from "../screens/Rest";
import { StatusBar } from "expo-status-bar";

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

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
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
    </NavigationContainer>
  );
};

export default AppNavigation;
