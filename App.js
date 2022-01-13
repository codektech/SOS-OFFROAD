import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Src/Screens/TeamScreens/Home";
import DrawerNavigator from "./Src/Stacks/DrawerNavigator";
import CaseDetails from "./Src/Screens/TeamScreens/CaseDetails";
import Cases from "./Src/Screens/TeamScreens/Cases";
import AdminNavigator from "./Src/Stacks/AdminNavigator";
import SosUser from "./Src/Screens/TeamScreens/SosUser";
import SosSubmitCase from "./Src/Screens/TeamScreens/SosSubmitCase";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AdminNavigator />
      </NavigationContainer>
      {/* <SosUser /> */}
      {/* <SosSubmitCase /> */}
    </>
  );
}
