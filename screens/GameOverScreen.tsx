import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/Colors";

function GameOverScreen() {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "white",
  },
  imageContainer: {
    width: 400,
    height: 500,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },
});
