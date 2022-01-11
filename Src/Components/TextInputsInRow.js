import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const TextInputsInRow = (props) => {
  const { setState, state, name1, name2, setIndex } = props;

  const [focus, setFocus] = useState(false);
  const [secondfocus, setSecondfocus] = useState(false);
  const handlesetState = (value, name) => {
    setState({ ...state, [name]: value });
  };
  const handlefocus = () => {
    setFocus(true);
    setIndex(null);
  };
  const handlesecondfocus = () => {
    setSecondfocus(true);
    setIndex(null);
  };
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
          placeholder=" Enter Model"
          onFocus={handlefocus}
          onBlur={() => setFocus(false)}
          onChangeText={(value) => handlesetState(value, name1)}
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
          placeholder="Enter Number"
          onFocus={handlesecondfocus}
          onBlur={() => setSecondfocus(false)}
          onChangeText={(value) => handlesetState(value, name2)}
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
