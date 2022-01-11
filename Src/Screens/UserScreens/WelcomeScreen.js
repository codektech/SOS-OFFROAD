import React from "react";
import { View, Text } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
import TouchableButton from "../../Components/TouchableButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "85%",
          height: "20%",
          backgroundColor: ColorStyles.primaryColor,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "90%",
            width: 2,
            backgroundColor: "white",
          }}
        ></View>
        <Text style={{ color: "white", fontSize: 22 }}>SOS{"\n"}OFFROAD</Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 19, margin: 50 }}>
        Welcome to {"\n"}SOS Offroad
      </Text>
      <TouchableButton
        onPress={() => console.log("Login with email")}
        bg={ColorStyles.primaryColor}
        text={"Login with email"}
        icon={<MaterialCommunityIcons name="email" size={24} color="white" />}
      />
    </View>
  );
};

export default WelcomeScreen;
