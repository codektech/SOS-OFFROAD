import React from "react";
import { View, Text } from "react-native";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import CaseNumber from "../../Components/CaseNumber";
import InviteandSupportComponent from "../../Components/InviteandSupportComponent";
const CaseDetails = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <CaseDetailsTopHeader />
      <CaseNumber />
      <View style={{ height: "5%" }}></View>
      <InviteandSupportComponent />
    </View>
  );
};

export default CaseDetails;
