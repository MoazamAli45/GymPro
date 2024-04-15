import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useExerciseContext } from "../context/ExerciseContext";

const FitScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    exercisesCompleted,
    setExercisesCompleted,

    setWorkouts,

    setEnergy,

    setTime,
  } = useExerciseContext();

  const { exercises } = route.params;
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0);
  const currentExercise = exercises[currentExerciseIndex];

  const handleBackPress = () => {
    setCurrentExerciseIndex((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleSkipPress = () => {
    setCurrentExerciseIndex((prev) => {
      if (prev === exercises.length - 1) {
        navigation.navigate("Home");
        return 0;
      }
      return prev + 1;
    });
  };
  const handleDonePress = () => {
    navigation.navigate("Rest");
    setExercisesCompleted([...exercisesCompleted, currentExercise?.name]);
    setWorkouts((prev) => prev + 1);
    setEnergy((prev) => prev + 6.3);
    setTime((prev) => prev + 3);
    setTimeout(() => {
      setCurrentExerciseIndex((prev) => {
        if (prev === exercises.length - 1) {
          navigation.navigate("Home");
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const statusBarHeight = StatusBar.currentHeight || 0;
  return (
    <SafeAreaView
      style={{
        marginTop: statusBarHeight,
      }}
    >
      {currentExercise?.image && (
        <Image
          source={{ uri: currentExercise.image }}
          style={{ width: "100%", height: 250, borderRadius: 5 }}
        />
      )}
      <MaterialIcons
        name="arrow-back"
        size={30}
        color="black"
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{currentExercise.name}</Text>
        <Text style={styles.sets}>x{currentExercise.sets}</Text>
        <Pressable style={styles.btnDone} onPress={handleDonePress}>
          <Text style={styles.btnText}>Done</Text>
        </Pressable>
        <View style={styles.containerBtn}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText} onPress={handleBackPress}>
              Previous
            </Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleSkipPress}>
            <Text style={styles.btnText}>Skip</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    gap: 20,
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  sets: {
    fontSize: 35,
    fontWeight: "900",
  },
  btnDone: {
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 12,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 20,
    width: 150,
  },
  btn: {
    width: 100,
    backgroundColor: "green",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
  },
});
