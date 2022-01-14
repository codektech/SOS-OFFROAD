import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import ApplicationDetails from "../../Src/Screens/AdminScreens/ApplicationDetails";
import CaseDetails from "../../Src/Screens/AdminScreens/CaseDetails";
import ArchvieCase from "../../Src/Screens/AdminScreens/ArchvieCase";
import ArchiveDetails from "../../Src/Screens/AdminScreens/ArchiveDetails";
const AdminNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="ApplicationDetails" component={ApplicationDetails} />
      <Stack.Screen name="CaseDetails" component={CaseDetails} />
      <Stack.Screen name="ArchiveDetails" component={ArchiveDetails} />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
