import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
import TextInputComponent from "../../Components/TextInputComponent";
import TouchableButton from "../../Components/TouchableButton";
import { Ionicons } from "@expo/vector-icons";
const Signup = () => {
  const [signin, setSignin] = useState({ username: "", email: "", pwd: "" });

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 15,
      }}
    >
      <TouchableOpacity style={{ height: "15%", justifyContent: "center" }}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          color: ColorStyles.primaryColor,
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Create an Account
      </Text>
      <View style={{ height: 10 }}></View>

      <Text style={{ fontSize: 15 }}>
        Please Enter the following details to create an account with us
      </Text>
      <View style={{ height: 10 }}></View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TextInputComponent
          heading={"Username"}
          placeholder={"Enter your username"}
          setState={setSignin}
          state={signin}
          name={"username"}
        />
        <TextInputComponent
          heading={"Email"}
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
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableButton
          onPress={() => console.log(signin)}
          bg={ColorStyles.secondaryColor}
          text={"SIGN UP & CONTINUE"}
        />
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: ColorStyles.greycolor }}>
            By tapping "Sign Up" you have accepted our
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: ColorStyles.primaryColor,
                fontWeight: "bold",
              }}
            >
              Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
