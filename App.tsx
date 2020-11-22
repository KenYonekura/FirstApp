//App.tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import logo from "./assets/sparta.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>Hello, Sparta Camp!</Text>
      <Pressable 
      onPress={() => alert("Hello World!")}
      style={{backgroundColor:"blue"}}>
        <text style={{fontSize: 20, color:"#fff"}}>Pick a Photo</text>
      </Pressable>
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
    color: "magenta",
    fontSize: 30,
    marginHorizontal: 15,
  },
});
