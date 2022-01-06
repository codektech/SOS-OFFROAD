import React from "react";
import { View, Text, FlatList } from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const CompletedComponent = () => {
  const Data = [
    { Pos: 1, CaseNumber: 1234567, support: 0 },
    { Pos: 2, CaseNumber: 1234567, support: 1 },
    { Pos: 3, CaseNumber: 1234567, support: 2 },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: ColorStyles.lightGrey,
          height: 35,
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 2,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      >
        <View
          style={{
            height: "100%",
            width: 10,
            backgroundColor: "#8fb8f8",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        ></View>
        <Text style={{ marginLeft: 10 }}>{item.Pos}</Text>
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text>{item.CaseNumber}</Text>
          <Text>{item.support}</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        height: "30%",
        width: "85%",
        // backgroundColor: "black",
        marginTop: 50,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "15%",
          //   backgroundColor: "yellow",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            color: ColorStyles.lightGrey,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          POS
        </Text>
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: ColorStyles.lightGrey,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            CASE NUMBER
          </Text>
          <Text
            style={{
              color: ColorStyles.lightGrey,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            SUPPORT
          </Text>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.Pos}
      />
    </View>
  );
};

export default CompletedComponent;
