import React, { useState } from "react";
import { View, Text } from "react-native";
import AdminHeader from "../../Components/AdminHeader";
import RegisteredUsersFlatlist from "../../Components/RegisteredUsersFlatlist";
const RegisteredUsers = () => {
  const [state, setState] = useState("Pending");
  return (
    <View style={{ flex: 1 }}>
      <AdminHeader text={"REGISTERED USERS"} />
      <View style={{ height: "3%" }}></View>
      <RegisteredUsersFlatlist />
    </View>
  );
};

export default RegisteredUsers;
