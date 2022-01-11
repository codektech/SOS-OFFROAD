import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
import TextInputComponent from "../../Components/TextInputComponent";
import TouchableButton from "../../Components/TouchableButton";
const Signin = () => {
  const [signin, setSignin] = useState({ email: "", pwd: "" });

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 10,
      }}
    >
      <View style={{ height: "15%" }}></View>
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
          setState={setSignin}
          state={signin}
          name={"email"}
        />
        <TextInputComponent
          heading={"Password"}
          placeholder={"Enter your Password"}
          icon={true}
          setState={setSignin}
          state={signin}
          name={"pwd"}
        />
        <TouchableButton
          onPress={() => console.log(signin)}
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
        <TouchableOpacity>
          <Text
            style={{
              color: ColorStyles.primaryColor,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Reset here
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text
          style={{
            color: ColorStyles.greycolor,
            fontSize: 14,
            margin: 20,
          }}
        >
          Don't have an account?
        </Text>
        <TouchableButton
          bg={ColorStyles.secondaryColor}
          text={"Create Account"}
        />
      </View>
    </View>
  );
};

export default Signin;
