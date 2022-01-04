import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const TouchableButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: props.icon ? null : "center",
        width: "80%",
        height: 60,
        backgroundColor: ColorStyles.primaryColor,
        borderRadius: 30,
      }}
    >
      {props.icon ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "75%",
            height: "100%",
          }}
        >
          <Text style={{ color: "white" }}>Icon</Text>
          <Text style={{ color: "white" }}>Hello World</Text>
        </View>
      ) : (
        <Text style={{ color: "white" }}>Hello World</Text>
      )}
    </TouchableOpacity>
  );
};

export default TouchableButton;
