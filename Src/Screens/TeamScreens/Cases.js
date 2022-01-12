import React, { useState } from "react";
import { View, Text } from "react-native";
import ColorStyles from "../../Colors/ColorStyles";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import CasesFlatlist from "../../Components/CasesFlatlist";
import ImagesFlatlist from "../../Components/ImagesFlatlist";
import LocationDetailsComponent from "../../Components/LocationDetailsComponent";
import TouchableButton from "../../Components/TouchableButton";
import CompletedComponent from "../../Components/CompletedComponent";
const Cases = () => {
  const [state, setState] = useState("Pending");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CaseDetailsTopHeader icon={true} text="Cases" />
      <CasesFlatlist state={state} setState={setState} />
      <View style={{ height: "5%" }}></View>
      {state === "Pending" ? (
        <>
          <ImagesFlatlist />
          <LocationDetailsComponent />
        </>
      ) : (
        <CompletedComponent />
      )}
      <View style={{ height: "5%" }}></View>
      {state === "Pending" ? (
        <TouchableButton bg={ColorStyles.primaryColor} text="Open Case" />
      ) : null}
    </View>
  );
};

export default Cases;
