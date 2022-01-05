import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DropdownInput from "./Src/Components/DropdownInput";
import TextInputComponent from "./Src/Components/TextInputComponent";
import TextInputsInRow from "./Src/Components/TextInputsInRow";
import TouchableButton from "./Src/Components/TouchableButton";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <TouchableButton icon={true} />
      <TextInputComponent />
      <TextInputComponent icon={true} /> */}
      <TextInputsInRow />
      <DropdownInput />
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
