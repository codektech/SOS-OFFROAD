import React from "react";
import { View, Text } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const CaseNumber = () => {
  return (
    <View
      style={{
        width: "90%",
        height: 60,
        backgroundColor: "#dadada",
        borderRadius: 10,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          color: "black",
          marginLeft: 10,
        }}
      >
        Case#1111111
      </Text>
    </View>
  );
};

export default CaseNumber;
