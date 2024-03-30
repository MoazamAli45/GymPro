import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Workout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  console.log("item", item);
  return (
    <>
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: item?.image }}
          style={{ width: "100%", height: 250, borderRadius: 5 }}
        />
        <MaterialIcons
          name="arrow-back"
          size={30}
          color="white"
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        {item.excersises?.map((exercise, index) => (
          <Pressable key={exercise.id} style={styles.card}>
            <Image
              source={{ uri: exercise.image }}
              style={{ width: 90, height: 90 }}
            />
            <View>
              <Text style={styles.title}>{exercise.name}</Text>
              <Text style={styles.set}>x{exercise.sets}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Start</Text>
      </Pressable>
    </>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  card: {
    margin: 10,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
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
