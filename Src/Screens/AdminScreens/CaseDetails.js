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
const CaseDetails = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CaseDetailsTopHeader />
      <CaseNumber caseno={item.caseno} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <View style={{ height: "5%" }}></View>
        <InviteandSupportComponent
          invite={item.invitesent}
          support={item.support}
        />
        <View style={{ height: "5%" }}></View>
        <ImagesFlatlist />
        <LocationDetailsComponent description={item.description} />
        <View style={{ height: "5%" }}></View>
        <TouchableButton
          bg={ColorStyles.redColor}
          text="Archive Case"
          icon={<Feather name="archive" size={24} color="white" />}
        />
      </ScrollView>
    </View>
  );
};

export default CaseDetails;
