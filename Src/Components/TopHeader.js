import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
import { Feather } from "@expo/vector-icons";
const TopHeader = () => {
  return (
    <View
      style={{
        height: "25%",
        width: "100%",
        backgroundColor: ColorStyles.primaryColor,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
      }}
    >
      <View
        style={{
          height: "35%",
          //    backgroundColor: "white"
        }}
      ></View>
      <View
        style={{
          width: "100%",
          height: "25%",
          flexDirection: "row",
          //   backgroundColor: "yellow",
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "20%",
            // backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 2.5,
              width: "30%",
              backgroundColor: "white",
              marginVertical: 3,
            }}
          ></View>
          <View
            style={{
              height: 2.5,
              width: "30%",
              backgroundColor: "white",
              marginVertical: 3,
              marginLeft: 5,
            }}
          ></View>
          <View
            style={{
              height: 2.5,
              width: "30%",
              backgroundColor: "white",
              marginVertical: 3,
            }}
          ></View>
        </TouchableOpacity>
        <View
          style={{
            height: "100%",
            width: "80%",
            // backgroundColor: "green",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 14 }}>Good Morning</Text>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <Feather name="bell" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: "40%", alignItems: "flex-end" }}>
        <Text style={{ color: "white", fontSize: 19, fontWeight: "bold" }}>
          Shahzaib
        </Text>
      </View>
    </View>
  );
};

export default TopHeader;
