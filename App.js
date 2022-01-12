import { StyleSheet, Text, View, ScrollView } from "react-native";
import UserStack from "./Src/Stacks/UserStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <UserStack />
    </NavigationContainer>
  );
}
