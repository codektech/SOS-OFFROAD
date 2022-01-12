import React from "react";
import { View, Text } from "react-native";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import ProfileView from "../../Components/ProfileView";
import Personalinformation from "../../Components/Personalinformation";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CaseDetailsTopHeader icon={true} text="Profile" />
      <ProfileView />
      <Personalinformation />
    </View>
  );
};

export default Profile;
