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
import { useAuth } from "../context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const [showBoardingScreen, setShowBoardingScreen] = useState(null);
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser);

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
      <StatusBar style="auto" />
      {currentUser ? (
        <AppStack showBoardingScreen={showBoardingScreen} />
      ) : (
        <AuthStack showBoardingScreen={showBoardingScreen} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
