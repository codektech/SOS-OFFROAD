import React, { useState } from "react";
import { View, Text } from "react-native";
import TopHeader from "../../Components/TopHeader";
import Map from "../../Components/Map";
const Home = ({ navigation }) => {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <CaseDetailsTopHeader />
      <Map />
    </View>
  );
};

export default Home;
