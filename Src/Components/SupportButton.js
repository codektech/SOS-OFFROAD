import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const SupportButton = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorStyles.redColor,
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 10,
        borderColor: ColorStyles.secondarygreen,
        borderWidth: 1,
      }}
    >
      <Text style={{ color: ColorStyles.secondarygreen }}>Support</Text>
    </TouchableOpacity>
  );
};

export default SupportButton;
