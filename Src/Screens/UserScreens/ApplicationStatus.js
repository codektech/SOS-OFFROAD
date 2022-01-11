import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
import { Ionicons } from "@expo/vector-icons";
import StatusComponent from "../../Components/StatusComponent";
import TouchableButton from "../../Components/TouchableButton";
const ApplicationStatus = () => {
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
      <View style={{ height: 10 }}></View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text
          style={{
            color: ColorStyles.primaryColor,
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Your Application Status
        </Text>
        <View style={{ height: "20%" }}></View>
        <View style={{ width: "85%" }}>
          <Text style={{ fontSize: 15 }}>
            Your Application is under review, we weill send you a confirmation
            email when your application is accepted
          </Text>
        </View>
      </View>
      <StatusComponent />
      <View style={{ height: "10%" }}></View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableButton
          bg={ColorStyles.primaryColor}
          text="LOGOUT"
          half={true}
        />
      </View>
    </View>
  );
};

export default ApplicationStatus;
