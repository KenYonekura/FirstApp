//App.tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import logo from "./assets/sparta.jpg";
import * as ImagePicker from7 "expo-image-picker";

export default function App() {

  interface SelectedImageInfo{
    localUri: String;
  }

  const [selectedImage, setSelectedImage] = React.useState<SelectedImageInfo | undefined>();

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    // launchImageLibraryAsync();はカメラロールを事前に準備しておくよ｡というお作法
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
    } else {
      const selectedUri = {};
      console.log(pickerResult);
      setSelectedImage({ localUri: pickerResult.uri });
    }

    if (permissionResult.granted === false) {
      alert("カメラロールへのアクセス許可が必要です");
      return;
    }
  };

  if (selectedImage !== (null || undefined)){
    return(
      <View style={styles.container}>
        <Image
          source={{uri: selectedImage?.localUri}}
          style={styles.thumbnail}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>Hello, Sparta Camp!</Text>
      <Pressable onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
