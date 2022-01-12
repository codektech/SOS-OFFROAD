import React from "react";
import { View, Text } from "react-native";
import TopHeader from "../../Components/TopHeader";
import Map from "../../Components/Map";
const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopHeader />
      {/* <View style={{ flex: 1 }}> */}
      <Map />
      {/* </View> */}
    </View>
  );
};

export default Home;
