import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
import { Feather } from "@expo/vector-icons";
const TextInputComponent = (props) => {
  const { heading, placeholder, setState, state } = props;
  const [focus, setFocus] = useState(false);
  const [showpassword, setShowpassword] = useState(true);
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
        {heading}
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
            placeholder={placeholder}
            secureTextEntry={showpassword}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          ></TextInput>
          <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
            <Feather
              name={showpassword ? "eye" : "eye-off"}
              size={24}
              color={focus ? ColorStyles.primaryColor : ColorStyles.greycolor}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={{ height: 60, width: "90%", paddingLeft: 20 }}
          placeholder={placeholder}
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
