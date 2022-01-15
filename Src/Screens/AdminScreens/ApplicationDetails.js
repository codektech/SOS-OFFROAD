import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AdminHeader from "../../Components/AdminHeader";
import { Ionicons } from "@expo/vector-icons";
import TextInputComponent from "../../Components/TextInputComponent";
import TextInputsInRow from "../../Components/TextInputsInRow";
import ImagePickerComponent from "../../Components/ImagePickerComponent";
import TouchableButton from "../../Components/TouchableButton";
import ColorStyles from "../../Colors/ColorStyles";
const ApplicationDetails = ({ navigation, route }) => {
  const [index, setIndex] = useState(null);
  const item = route.params;
  console.log(item);
  return (
    <View style={{ flex: 1 }}>
      <AdminHeader
        text={"APPLICATIONS"}
        icon={<Ionicons name="arrow-back" size={24} color="white" />}
      />
      <View style={{ height: "5%" }}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", padding: 20 }}
      >
        <>
          <TextInputComponent
            heading={"User Name"}
            value={item.username}
            editable={false}
          />
          <TextInputComponent
            heading={"Email"}
            value={item.email}
            editable={false}
          />
          <TextInputsInRow
            value1={item.carmodel}
            value2={item.carnumber}
            setIndex={setIndex}
          />
          <TextInputComponent
            heading={"Equipments available"}
            value={item.equipmentsavailable}
            editable={false}
          />
          <TextInputComponent
            heading={"Expertise level"}
            value={item.Expertieslevel}
            editable={false}
          />
          <View style={{ height: 5 }}></View>
          <Text>Identity Proof</Text>
          <View style={{ height: 5 }}></View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <ImagePickerComponent />
            <ImagePickerComponent />
          </View>
        </>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ marginTop: 20 }}></View>
          <TouchableButton
            bg={ColorStyles.primaryColor}
            text={"ACCEPT APPLICATION"}
          />
          <View style={{ marginTop: 20 }}></View>

          <TouchableButton bg={ColorStyles.redColor} text={"REJECT"} />
        </View>
        <View style={{ marginTop: "20%" }}></View>
      </ScrollView>
    </View>
  );
};

export default ApplicationDetails;
