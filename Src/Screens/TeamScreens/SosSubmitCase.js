import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import CaseNumber from "../../Components/CaseNumber";
import InviteandSupportComponent from "../../Components/InviteandSupportComponent";
import ImagesFlatlist from "../../Components/ImagesFlatlist";
import LocationDetailsComponent from "../../Components/LocationDetailsComponent";
import SupportButton from "../../Components/SupportButton";
import ColorStyles from "../../Colors/ColorStyles";
import { Feather } from "@expo/vector-icons";
const SosSubmitCase = () => {
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

        <SupportButton />
      </ScrollView>
    </View>
  );
};

export default SosSubmitCase;
