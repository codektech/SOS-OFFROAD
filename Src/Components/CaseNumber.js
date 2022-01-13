import React from "react";
import { View, Text } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const CaseNumber = (props) => {
  const { caseno } = props;
  return (
    <View
      style={{
        width: "90%",
        height: 60,
        backgroundColor: "#dadada",
        borderRadius: 10,
        justifyContent: "center",
        position: "absolute",
        marginTop: "30%",
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
        Case # {caseno}
      </Text>
    </View>
  );
};

export default CaseNumber;
