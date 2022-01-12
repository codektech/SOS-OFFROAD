import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CaseDetailsTopHeader = (props) => {
  const { icon, text } = props;
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: "20%",
        width: "100%",
        backgroundColor: "black",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon ? (
        <View
          style={{
            width: "100%",
            height: 60,
            // backgroundColor: "green",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              height: "100%",
              width: "20%",
              // backgroundColor: "black",
              justifyContent: "center",
              // marginTop: 20,
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
          <Text style={{ color: "white", fontSize: 19, fontWeight: "bold" }}>
            {text}
          </Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{ color: "white", fontSize: 19, fontWeight: "bold" }}>
          Case Details
        </Text>
      )}
    </View>
  );
};

export default CaseDetailsTopHeader;
