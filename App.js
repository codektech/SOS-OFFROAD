import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Src/Screens/TeamScreens/Home";
import DrawerNavigator from "./Src/Stacks/DrawerNavigator";
import CaseDetails from "./Src/Screens/TeamScreens/CaseDetails";
import Cases from "./Src/Screens/TeamScreens/Cases";
import TeamNavigator from "./Src/Stacks/TeamNavigator";
import SosUser from "./Src/Screens/TeamScreens/SosUser";
export default function App() {
  return (
    <>
      {/* <NavigationContainer>
      <TeamNavigator />
    </NavigationContainer> */}
      <SosUser />
    </>
  );
}
