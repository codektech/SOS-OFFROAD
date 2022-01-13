import React, { useState } from "react";
import { View, Text } from "react-native";
import AdminHeader from "../../Components/AdminHeader";
import CasesFlatlist from "../../Components/CasesFlatlist";
import UsersFlatlist from "../../Components/UsersFlatlist";
const Applications = () => {
  const [state, setState] = useState("Pending");
  return (
    <View style={{ flex: 1 }}>
      <AdminHeader text={"APPLICATIONS"} />
      <View style={{ height: "3%" }}></View>
      <CasesFlatlist state={state} setState={setState} />
      <UsersFlatlist />
    </View>
  );
};

export default Applications;
