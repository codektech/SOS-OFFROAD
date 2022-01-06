import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import ColorStyles from "../Colors/ColorStyles";

const Personalinformation = () => {
  const Data = ["Username", "Email", "Mobile Phone", "Address"];
  const [editable, setEditable] = useState(false);
  return (
    <View
      style={{
        marginTop: 20,
        width: "90%",
        height: "40%",
        // backgroundColor: "black",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: ColorStyles.greycolor,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Personal information
        </Text>
        <TouchableOpacity onPress={() => setEditable(true)}>
          <Feather name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {Data.map((item) => (
        <View style={{ marginBottom: 5 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{item}</Text>
            <TextInput
              editable={editable}
              //   value={"hamzaShabbir4213@gmail.com"}
              placeholder={item}
              style={{ width: "40%" }}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: ColorStyles.lightGrey,
            }}
          ></View>
        </View>
      ))}
    </View>
  );
};

export default Personalinformation;
