import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ColorStyles from "../../Colors/ColorStyles";
import TextInputsInRow from "../../Components/TextInputsInRow";
import TextInputComponent from "../../Components/TextInputComponent";
import DropdownInput from "../../Components/DropdownInput";
import ImagePickerComponent from "../../Components/ImagePickerComponent";
import TouchableButton from "../../Components/TouchableButton";
const SosUser = () => {
  const [FormData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    Description: "",
  });
  const [expertieslevel, setExpertieslevel] = useState("Intermediate");
  const [index, setIndex] = useState(null);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        padding: 20,
      }}
    >
      <View style={{ height: 20 }}></View>
      <Text
        style={{
          color: ColorStyles.primaryColor,
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        SOS FORM
      </Text>
      <View style={{ height: 10 }}></View>

      <Text style={{ fontSize: 15 }}>
        Please Enter the following details to Register an account with us
      </Text>
      <View style={{ height: 20 }}></View>

      <TextInputComponent
        heading={"ENTER YOUR NAME"}
        placeholder={"Enter Name"}
        setState={setFormData}
        state={FormData}
        name={"Name"}
      />
      <TextInputComponent
        heading={"PHONE NUMBER"}
        placeholder={"Enter Phone"}
        keyboardType={"numeric"}
        setState={setFormData}
        state={FormData}
        name={"PhoneNumber"}
      />
      <TextInputComponent
        heading={"DESCRIPTION"}
        placeholder={"Enter Name"}
        setState={setFormData}
        state={FormData}
        name={"Description"}
      />
      <View style={{ width: "90%" }}>
        <Text style={{ color: ColorStyles.greycolor }}>ATTACH PICTURES</Text>
      </View>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ImagePickerComponent />
        <ImagePickerComponent />
      </View>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableButton
          onPress={() => console.log(FormData)}
          bg={ColorStyles.secondaryColor}
          text={"Submit Application"}
        />
      </View>
    </View>
  );
};

export default SosUser;
