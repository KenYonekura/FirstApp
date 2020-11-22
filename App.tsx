//App.tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import logo from "./assets/iwaku.png";
import * as ImagePicker from "expo-image-picker";
// シェアリング機能使いますよ｡という宣言
import * as Sharing from "expo-sharing";

export default function App() {
// 型の定義
  interface SelectedImageInfo{
    localUri: String;
  }
// Reactのフックという機能の一つ｡クラスの定義の一つを全体で使えるようにしたもの？
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

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`お使いのプラットフォームではシェア機能は利用できません`);
      return;
    } else if (selectedImage) {
      await Sharing.shareAsync(selectedImage.localUri);
    }
  };
  if (selectedImage !== (null || undefined)) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage?.localUri }}
          style={styles.thumbnail}
        />
        <Pressable onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </Pressable>
      </View>
    );
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
