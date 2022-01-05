import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const TextInputsInRow = (props) => {
  const [focus, setFocus] = useState(false);
  const [secondfocus, setSecondfocus] = useState(false);
  return (
    <View
      style={{
        height: 120,
        width: "90%",
        justifyContent: "space-between",
        // backgroundColor: "yellow",
        flexDirection: "row",
      }}
    >
      <View style={{ width: "40%" }}>
        <Text style={{ color: ColorStyles.greycolor, fontSize: 19 }}>
          Car Model
        </Text>
        <TextInput
          style={{ height: 60, width: "90%", paddingLeft: 20 }}
          placeholder="Hello world"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        ></TextInput>
        <View
          style={{
            height: 3,
            width: "100%",
            backgroundColor: focus
              ? ColorStyles.primaryColor
              : ColorStyles.greycolor,
          }}
        ></View>
      </View>
      <View style={{ width: "40%" }}>
        <Text style={{ color: ColorStyles.greycolor, fontSize: 19 }}>
          Car Number
        </Text>
        <TextInput
          style={{ height: 60, width: "90%", paddingLeft: 20 }}
          placeholder="Hello world"
          onFocus={() => setSecondfocus(true)}
          onBlur={() => setSecondfocus(false)}
        ></TextInput>
        <View
          style={{
            height: 3,
            width: "100%",
            backgroundColor: secondfocus
              ? ColorStyles.primaryColor
              : ColorStyles.greycolor,
          }}
        ></View>
      </View>
    </View>
  );
};

export default TextInputsInRow;
