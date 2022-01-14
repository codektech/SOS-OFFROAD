import React, { useState } from "react";
import { View, Text } from "react-native";
import AdminHeader from "../../Components/AdminHeader";
import CasesFlatlist from "../../Components/CasesFlatlist";
import PendingCasesFlatlist from "../../Components/PendingCasesFlatlist";
const Cases = () => {
  const [state, setState] = useState("Pending");
  return (
    <View style={{ flex: 1 }}>
      <AdminHeader text={"CASES"} />
      <View style={{ height: "3%" }}></View>
      <CasesFlatlist state={state} setState={setState} archived={true} />
      <PendingCasesFlatlist state={state} />
    </View>
  );
};

export default Cases;
