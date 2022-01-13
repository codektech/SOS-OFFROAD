import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const AdminHeader = (props) => {
  const { icon, text, bg } = props;
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: "20%",
        width: "100%",
        backgroundColor: bg ? bg : "black",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <View
          style={{
            height: "100%",
            width: "20%",
            // backgroundColor: "yellow",
            justifyContent: "center",
            // marginTop: 20,
            alignItems: "center",
          }}
        >
          {icon ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              {icon}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                height: "100%",
                width: "100%",
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
          )}
        </View>
        <View
          style={{
            height: "100%",
            width: "65%",
            // backgroundColor: "cyan",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ color: "white", fontSize: 19, fontWeight: "bold" }}>
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AdminHeader;
