import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
const SplashScreen = () => {
  // useEffect(() => {
  //     setTimeout(() => navigation.replace("SplashScreenTwo"), 2000);
  //   }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorStyles.primaryColor,
      }}
    >
      <Image source={require("../../Images/SOS.png")} />
    </View>
  );
};

export default SplashScreen;
