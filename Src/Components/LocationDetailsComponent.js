import React from "react";
import { View, Text, ScrollView } from "react-native";

const LocationDetailsComponent = () => {
  return (
    <View style={{ height: "20%", width: "90%" }}>
      <Text style={{ fontWeight: "normal", fontSize: 19 }}>Location name</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ marginTop: 10 }}>
          This is the detail of location will be written by user.This is the
          detail of location will be written by user.This is the detail of
          location will be written by user.This is the detail of location will
          be written by user.This is the detail of location will be written by
          user.
        </Text>
      </ScrollView>
    </View>
  );
};

export default LocationDetailsComponent;
