import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
const TextInputComponent = (props) => {
  const [focus, setFocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View
      style={{
        height: 120,
        width: "90%",
        // justifyContent: "center",
        // backgroundColor: "yellow",
      }}
    >
      <Text style={{ color: ColorStyles.greycolor, fontSize: 19 }}>
        Email/Username
      </Text>
      {props.icon ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{ height: 60, width: "90%", paddingLeft: 20 }}
            placeholder="Hello world"
            secureTextEntry={showpassword}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          ></TextInput>
          <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
            <Text>Icon</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={{ height: 60, width: "90%", paddingLeft: 20 }}
          placeholder="Hello world"
          secureTextEntry={showpassword}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        ></TextInput>
      )}
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
  );
};

export default TextInputComponent;
