import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const CasesFlatlist = () => {
  const Data = ["Pending", "Completed", "Rejected"];
  const [state, setState] = useState("Pending");
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setState(item)}
        style={{
          marginHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: item === state ? ColorStyles.primaryColor : "black",
            fontSize: 15,
            fontWeight: item === state ? "bold" : "normal",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        height: "8%",
        // backgroundColor: "yellow",
        width: "100%",
        alignItems: "center",
      }}
    >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#d7d7d7",
        }}
      >
        <View
          style={{
            backgroundColor: ColorStyles.primaryColor,
            height: 2.5,
            width: "20%",
            marginLeft:
              state === "Pending" ? 20 : state === "Rejected" ? 270 : null,
            alignSelf: state === "Completed" ? "center" : null,
          }}
        ></View>
      </View>
    </View>
  );
};

export default CasesFlatlist;
