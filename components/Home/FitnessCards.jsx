import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import fitness from "../../data/fitness";
import { useNavigation } from "@react-navigation/native";
// import
const FitnessCards = () => {
  const data = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {data.map((item, index) => (
        <Pressable
          key={index}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("Workout", {
              item,
            })
          }
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: "90%",
              height: 200,
              borderRadius: 10,
              marginVertical: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 17,
              position: "absolute",
              top: 20,
              left: 30,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 20,
              left: 20,
            }}
            name="lightning-bolt"
            size={30}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000000",
  },
});

export default FitnessCards;
