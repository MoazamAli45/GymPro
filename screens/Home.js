import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import FitnessCards from "../components/Home/FitnessCards";
import { useExerciseContext } from "../context/ExerciseContext";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firbase";

const Home = () => {
  const navigation = useNavigation();
  const { energy, time, workouts } = useExerciseContext();
  const { currentUser, setCurrentUser } = useAuth();

  console.log("currentUser", currentUser);

  const statusBarHeight = StatusBar.currentHeight || 0;

  const handleLogout = () => {
    console.log("logout");
    signOut(auth)
      .then(async () => {
        await AsyncStorage.removeItem("user");
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <ScrollView
      style={{
        marginTop: statusBarHeight,
      }}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            {currentUser
              ? `Hello  ${currentUser?.email.split("@")[0]}`
              : "HOME WORKOUT"}
          </Text>
          <Pressable
            onPress={() => {
              handleLogout();
            }}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
        <View style={styles.workoutContainer}>
          <View style={styles.workouts}>
            <Text style={styles.workoutNumber}>{workouts}</Text>
            <Text style={styles.workoutText}>WORKOUTS</Text>
          </View>
          <View style={styles.workouts}>
            <Text style={styles.workoutNumber}>{energy.toFixed(2)}</Text>
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
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 7,
  },
  logoutText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
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
    marginTop: -70,
  },
});
export default Home;
