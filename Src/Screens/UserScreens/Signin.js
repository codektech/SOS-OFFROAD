import React from "react";
import { View, Text } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
import TextInputComponent from "../../Components/TextInputComponent";
import TouchableButton from "../../Components/TouchableButton";
const Signin = () => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 10,
      }}
    >
      <View style={{ height: "20%" }}></View>
      <Text
        style={{
          color: ColorStyles.primaryColor,
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Sign In
      </Text>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ height: "10%" }}></View>
        <TextInputComponent
          heading={"Email/Username"}
          placeholder={"Enter your email"}
        />
        <TextInputComponent
          heading={"Password"}
          placeholder={"Enter your Password"}
          icon={true}
        />
        <TouchableButton
          onPress={() => console.log("Login")}
          bg={ColorStyles.primaryColor}
          text={"Login"}
        />
      </View>
      <View
        style={{
          width: "60%",
          height: 30,
          //   backgroundColor: "yellow",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ color: ColorStyles.greycolor, fontSize: 14 }}>
          Forgot Password?
        </Text>
        <Text
          style={{
            color: ColorStyles.primaryColor,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Reset here
        </Text>
      </View>
    </View>
  );
};

export default Signin;
