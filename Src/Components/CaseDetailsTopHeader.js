import React from "react";
import { View, Text } from "react-native";

const CaseDetailsTopHeader = () => {
  return (
    <View
      style={{
        height: "20%",
        width: "100%",
        backgroundColor: "black",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 19, fontWeight: "bold" }}>
        Case Details
      </Text>
    </View>
  );
};

export default CaseDetailsTopHeader;
