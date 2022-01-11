import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ColorStyles from "../../Colors/ColorStyles";
import TextInputsInRow from "../../Components/TextInputsInRow";
import TextInputComponent from "../../Components/TextInputComponent";
import DropdownInput from "../../Components/DropdownInput";
import ImagePickerComponent from "../../Components/ImagePickerComponent";
import TouchableButton from "../../Components/TouchableButton";
const EligibilityRegistration = () => {
  const [eligibilityData, setEligibilityData] = useState({
    carModel: "",
    carNumber: "",
    equipmentsAvailable: "",
  });
  const [expertieslevel, setExpertieslevel] = useState("Intermediate");
  const [index, setIndex] = useState(null);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        padding: 15,
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
        Submit Eligibility Form
      </Text>
      <View style={{ height: 10 }}></View>

      <Text style={{ fontSize: 15 }}>
        Please Enter the following details to Register an account with us
      </Text>
      <View style={{ height: 20 }}></View>
      <TextInputsInRow
        setState={setEligibilityData}
        state={eligibilityData}
        name1={"carModel"}
        name2={"carNumber"}
        setIndex={setIndex}
      />
      <TextInputComponent
        heading={"Equipments Available"}
        placeholder={"Enter your Equipments"}
        setState={setEligibilityData}
        state={eligibilityData}
        name={"equipmentsAvailable"}
        setIndex={setIndex}
      />
      <DropdownInput
        expertieslevel={expertieslevel}
        setExpertieslevel={setExpertieslevel}
        setIndex={setIndex}
        index={index}
      />
      <View style={{ width: "90%" }}>
        <Text style={{ color: ColorStyles.greycolor }}>
          Upload Identity Proof
        </Text>
        <Text style={{ color: ColorStyles.greenColor }}>
          {"\u2B22"}
          Pleae Upload front and back side of your legal documents
        </Text>
      </View>
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
      <TouchableButton
        onPress={() => console.log(eligibilityData, expertieslevel)}
        bg={ColorStyles.secondaryColor}
        text={"Submit Application"}
      />
    </View>
  );
};

export default EligibilityRegistration;
