import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextInputComponent from "./Src/Components/TextInputComponent";
import TouchableButton from "./Src/Components/TouchableButton";
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableButton icon={true} />
      <TextInputComponent />
      <TextInputComponent icon={true} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
