import React from "react";
import { View, Text } from "react-native";
import AdminHeader from "../../Components/AdminHeader";
import ProfileView from "../../Components/ProfileView";
import Personalinformation from "../../Components/Personalinformation";
import TouchableButton from "../../Components/TouchableButton";
import ColorStyles from "../../Colors/ColorStyles";
const AdminViewUser = ({ navigation, route }) => {
  const item = route.params;
  console.log(item);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <AdminHeader text={"REGISTERED USERS"} icon={true} />
      <ProfileView username={item.username} img={item.img} />
      <Personalinformation eidt={false} />
      <View style={{ height: 5 }}></View>
      <View style={{ width: "100%", padding: 20 }}>
        <Text
          style={{
            color: ColorStyles.greycolor,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Cases
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text>Completed</Text>
        <Text>5</Text>
      </View>
      <View
        style={{
          height: 2,
          width: "100%",
          marginTop: 5,
          backgroundColor: ColorStyles.greycolor,
        }}
      ></View>
      <View style={{ height: 15 }}></View>
      <View
        style={{
          width: "90%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text>Rejected</Text>
        <Text>20</Text>
      </View>
      <View
        style={{
          height: 2,
          width: "100%",
          marginTop: 5,
          backgroundColor: ColorStyles.greycolor,
        }}
      ></View>
      <View style={{ height: "5%" }}></View>
      <TouchableButton bg={ColorStyles.redColor} text={"DEACTIVATE USER"} />
    </View>
  );
};

export default AdminViewUser;
