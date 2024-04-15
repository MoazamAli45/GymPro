import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useExerciseContext } from "../context/ExerciseContext";

const Workout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const { exercisesCompleted } = useExerciseContext();

  const statusBarHeight = StatusBar.currentHeight || 0;
  return (
    <>
      <ScrollView
        style={
          (styles.container,
          {
            marginTop: statusBarHeight,
          })
        }
      >
        <Image
          source={{ uri: item?.image }}
          style={{ width: "100%", height: 250, borderRadius: 5 }}
        />
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="white"
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />

        {item.excersises?.map((exercise) => (
          <Pressable key={exercise.id} style={styles.card}>
            <View style={styles.cardLeft}>
              <Image
                source={{ uri: exercise.image }}
                style={{ width: 90, height: 90 }}
              />
              <View>
                <Text style={styles.title}>{exercise.name}</Text>
                <Text style={styles.set}>x{exercise.sets}</Text>
              </View>
            </View>
            {exercisesCompleted.includes(exercise?.name) && (
              <AntDesign name="checkcircle" size={24} color="green" />
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={styles.btn}
        onPress={() =>
          navigation.navigate("FitScreen", {
            exercises: item.excersises,
          })
        }
      >
        <Text style={styles.btnText}>Start</Text>
      </Pressable>
    </>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // marginTop: 40,
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  cardLeft: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  set: {
    fontSize: 14,
    marginTop: 4,
    color: "gray",
  },
  btn: {
    backgroundColor: "blue",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 12,
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
