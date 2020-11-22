//App.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://bit.ly/2ULtog9" }} style={styles.logo} />
      <Text style={styles.instructions}>Hello, Sparta Camp!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7C743",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: "contain",
  },
  instructions: {
    color: "#195",
    fontSize: 18,
    marginHorizontal: 15,
  },
});
