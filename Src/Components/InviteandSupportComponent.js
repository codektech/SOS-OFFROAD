import React from "react";
import { View, Text } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
const InviteandSupportComponent = (props) => {
  const { invite, support } = props;
  return (
    <View
      style={{
        width: "100%",
        height: "20%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: "black",
      }}
    >
      <View
        style={{
          height: "70%",
          width: "30%",
          backgroundColor: ColorStyles.primaryColor,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "30%",
            width: "100%",
            backgroundColor: "#fdfdfd",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: ColorStyles.primaryColor, fontSize: 16 }}>
            Invite Sent
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            {invite}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: "70%",
          width: "30%",
          backgroundColor: ColorStyles.greenColor,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "30%",
            width: "100%",
            backgroundColor: "#fdfdfd",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: ColorStyles.secondarygreen, fontSize: 16 }}>
            Support
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            {support}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InviteandSupportComponent;
