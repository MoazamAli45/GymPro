import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LottieView from "lottie-react-native";

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      navigation.navigate("Home");
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <LottieView
          source={require("../assets/animations/welcome.json")}
          autoPlay
          loop
          style={{
            width: "200",
            height: 100,
            marginHorizontal: " auto",
            paddingRight: 50,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginTop: 20,
          }}
        >
          {" "}
          GYM PRO APP
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
