import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomlocatoionModal from "./Src/Components/BottomlocatoionModal";
import CaseDetailsTopHeader from "./Src/Components/CaseDetailsTopHeader";
import CaseNumber from "./Src/Components/CaseNumber";
import CasesFlatlist from "./Src/Components/CasesFlatlist";
import CompletedComponent from "./Src/Components/CompletedComponent";
import DropdownInput from "./Src/Components/DropdownInput";
import ImagePickerComponent from "./Src/Components/ImagePickerComponent";
import ImagesFlatlist from "./Src/Components/ImagesFlatlist";
import InviteandSupportComponent from "./Src/Components/InviteandSupportComponent";
import LocationDetailsComponent from "./Src/Components/LocationDetailsComponent";
import Personalinformation from "./Src/Components/Personalinformation";
import ProfileView from "./Src/Components/ProfileView";
import StatusComponent from "./Src/Components/StatusComponent";
import SupportButton from "./Src/Components/SupportButton";
import TextInputComponent from "./Src/Components/TextInputComponent";
import TextInputsInRow from "./Src/Components/TextInputsInRow";
import TopHeader from "./Src/Components/TopHeader";
import TouchableButton from "./Src/Components/TouchableButton";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <TextInputComponent />
      <TextInputComponent icon={true} /> */}
      {/* <TextInputsInRow /> */}
      {/* <DropdownInput /> */}
      {/* <ImagePickerComponent /> */}
      {/* <Text>hi</Text> */}
      {/* <StatusComponent /> */}
      {/* <TopHeader /> */}
      <CaseDetailsTopHeader />
      {/* <View
        style={{
          position: "absolute",
          marginTop: 120,
          width: "100%",
          // alignSelf: "center",
          alignItems: "center",
        }}
      >
        <CaseNumber />
      </View> */}
      <ProfileView />
      <Personalinformation />
      {/* <CasesFlatlist /> */}
      {/* <CompletedComponent /> */}
      {/* <InviteandSupportComponent /> */}
      {/* <ImagesFlatlist /> */}
      {/* <LocationDetailsComponent /> */}
      {/* <BottomlocatoionModal /> */}
      {/* <TouchableButton icon={true} /> */}
      {/* <SupportButton /> */}
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
