import React, { useState } from "react";
import { View, Text } from "react-native";
import TopHeader from "../../Components/TopHeader";
import Map from "../../Components/Map";
import BottomDrawerCases from "../../Components//BottomDrawerCases";
const Home = ({ navigation }) => {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <TopHeader
        onPress={() => navigation.openDrawer()}
        onpressicon={() => setModalvisible(!modalvisible)}
      />
      <Map />
      <BottomDrawerCases
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      />
    </View>
  );
};

export default Home;
