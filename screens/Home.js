import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const width = Dimensions.get("window").width;

const Home = () => {
  const navigation = useNavigation();

  const resetHandler = async () => {
    try {
      await AsyncStorage.removeItem("onBoarded");
      navigation.navigate("OnBoarding");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          source={require("../assets/animations/welcome.json")}
          autoPlay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
        }}
      >
        Home Screen
      </Text>
      <TouchableOpacity
        onPress={resetHandler}
        style={{ padding: 20, backgroundColor: "lightblue", borderRadius: 10 }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
export default Home;
