import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "../../Src/Stacks/DrawerNavigator";
import CaseDetails from "../../Src/Screens/TeamScreens/CaseDetails";
const TeamNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="CaseDetails" component={CaseDetails} />
    </Stack.Navigator>
  );
};

export default TeamNavigator;
