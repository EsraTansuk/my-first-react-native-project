import { StyleSheet, Image, Platform, View } from "react-native";


export default function TabTwoScreen() {
  return <View style={{ flex: 1 }}>Hello</View>;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
