import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Src/Screens/TeamScreens/Home";
import DrawerNavigator from "./Src/Stacks/DrawerNavigator";
import CaseDetails from "./Src/Screens/TeamScreens/CaseDetails";
export default function App() {
  return (
    // <Home />
    // <NavigationContainer>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <CaseDetails />
  );
}
