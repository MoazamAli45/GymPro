import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import FitnessCards from "../components/Home/FitnessCards";
import { useExerciseContext } from "../context/ExerciseContext";
const width = Dimensions.get("window").width;

const Home = () => {
  const navigation = useNavigation();
  const { energy, time, workouts } = useExerciseContext();

  const resetHandler = async () => {
    try {
      await AsyncStorage.removeItem("onBoarded");
      navigation.navigate("OnBoarding");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView
      style={{
        marginTop: 40,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>HOME WORKOUT</Text>
        <View style={styles.workoutContainer}>
          <View style={styles.workouts}>
            <Text style={styles.workoutNumber}>{workouts}</Text>
            <Text style={styles.workoutText}>WORKOUTS</Text>
          </View>
          <View style={styles.workouts}>
            <Text style={styles.workoutNumber}>{energy}</Text>
            <Text style={styles.workoutText}>KCAL</Text>
          </View>
          <View style={styles.workouts}>
            <Text style={styles.workoutNumber}>{time}</Text>
            <Text style={styles.workoutText}> MINS</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
          }}
          style={styles.image}
        />
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    padding: 10,
    backgroundColor: "#CD853F",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  workoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  workouts: {
    alignItems: "center",
  },
  workoutNumber: {
    color: "#fff",
  },
  workoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 10,
    marginTop: -80,
  },
});
export default Home;
