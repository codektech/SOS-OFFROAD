import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import CaseNumber from "../../Components/CaseNumber";
import InviteandSupportComponent from "../../Components/InviteandSupportComponent";
import ImagesFlatlist from "../../Components/ImagesFlatlist";
import LocationDetailsComponent from "../../Components/LocationDetailsComponent";
import TouchableButton from "../../Components/TouchableButton";
import SupportButton from "../../Components/SupportButton";
import ColorStyles from "../../Colors/ColorStyles";
import { Feather } from "@expo/vector-icons";
const CaseDetails = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CaseDetailsTopHeader />
      <CaseNumber />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <View style={{ height: "5%" }}></View>
        <InviteandSupportComponent />
        <View style={{ height: "5%" }}></View>
        <ImagesFlatlist />
        <LocationDetailsComponent />
        <View style={{ height: "5%" }}></View>
        <TouchableButton
          bg={ColorStyles.primaryColor}
          text="Call Now"
          icon={<Feather name="phone-call" size={24} color="white" />}
        />
        <SupportButton />
      </ScrollView>
    </View>
  );
};

export default CaseDetails;
