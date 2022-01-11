import React from "react";
import { View, Text } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
const StatusComponent = () => {
  return (
    <View
      style={{
        height: "20%",
        width: "35%",
        backgroundColor: ColorStyles.secondaryColor,
        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          height: "30%",
          width: "100%",
          backgroundColor: ColorStyles.greenColor,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 19 }}>PENDING </Text>
      </View>
      <Text style={{ color: "white", fontSize: 13, marginTop: 5 }}>
        JAMES AURTHUR
      </Text>
      <Text
        style={{ color: ColorStyles.greenColor, fontSize: 10, marginTop: 5 }}
      >
        jame@123.com
      </Text>
    </View>
  );
};

export default StatusComponent;
