import React, { useState } from "react";
import { View, Text } from "react-native";
import Map from "../../Components/Map";
import BottomDrawerCases from "../../Components//BottomDrawerCases";
import AdminHeader from "../../Components/AdminHeader";
import ColorStyles from "../../Colors/ColorStyles";
const Home = ({ navigation }) => {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <AdminHeader text={"Admin Dashboard"} bg={ColorStyles.primaryColor} />
      <View style={{ height: "5%" }}></View>

      <View
        style={{
          height: 250,
          width: "100%",
          backgroundColor: "white",
          padding: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View style={{ height: "5%" }}></View>
        <Text style={{ fontSize: 23 }}>Dashboard</Text>
        <View style={{ height: "5%" }}></View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 19, color: ColorStyles.redColor }}>
            Pending Cases
          </Text>
          <Text style={{ fontSize: 19, color: ColorStyles.redColor }}>20</Text>
        </View>
        <View style={{ height: "5%" }}></View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 19, color: ColorStyles.greenColor }}>
            Completed Cases
          </Text>
          <Text style={{ fontSize: 19, color: ColorStyles.greenColor }}>
            30
          </Text>
        </View>
        <View style={{ height: "5%" }}></View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 19, color: ColorStyles.primaryColor }}>
            Registered Users
          </Text>
          <Text style={{ fontSize: 19, color: ColorStyles.primaryColor }}>
            40
          </Text>
        </View>
      </View>
      <View
        style={{ height: 4, backgroundColor: ColorStyles.greycolor }}
      ></View>

      <Map />
      <BottomDrawerCases
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      />
    </View>
  );
};

export default Home;
