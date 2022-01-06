import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomlocatoionModal from "./Src/Components/BottomlocatoionModal";
import CaseDetailsTopHeader from "./Src/Components/CaseDetailsTopHeader";
import CaseNumber from "./Src/Components/CaseNumber";
import DropdownInput from "./Src/Components/DropdownInput";
import ImagePickerComponent from "./Src/Components/ImagePickerComponent";
import ImagesFlatlist from "./Src/Components/ImagesFlatlist";
import InviteandSupportComponent from "./Src/Components/InviteandSupportComponent";
import StatusComponent from "./Src/Components/StatusComponent";
import TextInputComponent from "./Src/Components/TextInputComponent";
import TextInputsInRow from "./Src/Components/TextInputsInRow";
import TopHeader from "./Src/Components/TopHeader";
import TouchableButton from "./Src/Components/TouchableButton";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <TouchableButton icon={true} />
      <TextInputComponent />
      <TextInputComponent icon={true} /> */}
      {/* <TextInputsInRow /> */}
      {/* <DropdownInput /> */}
      {/* <ImagePickerComponent /> */}
      {/* <Text>hi</Text> */}
      {/* <StatusComponent /> */}
      {/* <TopHeader /> */}
      <CaseDetailsTopHeader />
      <CaseNumber />
      <InviteandSupportComponent />
      <ImagesFlatlist />
      {/* <BottomlocatoionModal /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
