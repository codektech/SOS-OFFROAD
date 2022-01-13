import React from "react";
import { View, Text, ScrollView } from "react-native";

const LocationDetailsComponent = (props) => {
  const { description } = props;
  return (
    <View style={{ width: "90%" }}>
      <Text style={{ fontWeight: "normal", fontSize: 19 }}>Location name</Text>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <Text style={{ marginTop: 10 }}>{description}</Text>
      {/* </ScrollView> */}
    </View>
  );
};

export default LocationDetailsComponent;
