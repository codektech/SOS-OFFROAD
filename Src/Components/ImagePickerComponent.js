import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const [image, setImage] = useState("");
  const [imagepicked, setImagepicked] = useState(false);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result);
    console.log("result.uri", result.uri);
    await setImage(result.uri);

    await setImagepicked(true);
    console.log("image", image);
  };
  return (
    <TouchableOpacity
      onPress={pickImage}
      style={{
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "black",
        width: 115,
        height: 95,
      }}
    >
      {imagepicked ? (
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      ) : (
        <>
          <Image source={require("../Images/Background.png")} />
          <Image
            source={require("../Images/Vector.png")}
            style={{ position: "absolute" }}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

export default ImagePickerComponent;
