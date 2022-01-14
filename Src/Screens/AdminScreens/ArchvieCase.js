import React, { useState } from "react";
import { View, Text } from "react-native";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import CaseNumber from "../../Components/CaseNumber";
import InviteandSupportComponent from "../../Components/InviteandSupportComponent";
import ImagesFlatlist from "../../Components/ImagesFlatlist";
import LocationDetailsComponent from "../../Components/LocationDetailsComponent";
import TouchableButton from "../../Components/TouchableButton";
import SupportButton from "../../Components/SupportButton";
import TextInputComponent from "../../Components/TextInputComponent";
import ColorStyles from "../../Colors/ColorStyles";
import { Feather } from "@expo/vector-icons";
const ArchvieCase = ({ navigation, route }) => {
  const [reason, setReason] = useState({ reason: "" });
  const item = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CaseDetailsTopHeader />
      <CaseNumber caseno={item.caseno} />
      <View style={{ height: "10%" }}></View>
      <View
        style={{
          height: "60%",
          width: "100%",
          backgroundColor: ColorStyles.lightGrey,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: ColorStyles.redColor,
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          Archive Case # {item.caseno}
        </Text>
        <View style={{ height: "10%" }}></View>
        <TextInputComponent
          heading={"Description/Reason"}
          placeholder={"Enter Reason"}
          state={reason}
          setState={setReason}
          name="reason"
        />
        <View style={{ height: "15%" }}></View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableButton
            onPress={() => console.log(reason)}
            bg={ColorStyles.redColor}
            text="Archive Case"
            icon={<Feather name="archive" size={24} color="white" />}
          />
        </View>
      </View>
    </View>
  );
};

export default ArchvieCase;
