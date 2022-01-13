import React from "react";
import { View, Text } from "react-native";
import AdminHeader from "../../Components/AdminHeader";
import { Ionicons } from "@expo/vector-icons";
const ApplicationDetails = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={{ flex: 1 }}>
      <AdminHeader
        text={"APPLICATIONS"}
        icon={<Ionicons name="arrow-back" size={24} color="white" />}
      />
    </View>
  );
};

export default ApplicationDetails;
