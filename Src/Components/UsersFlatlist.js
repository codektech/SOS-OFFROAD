import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import ColorStyles from "../Colors/ColorStyles";
import { AntDesign } from "@expo/vector-icons";

const UsersFlatlist = () => {
  const Data = [
    { key: "1", username: "User Name", email: "user@user.com" },
    { key: "2", username: "User Name", email: "user@user.com" },
    { key: "3", username: "User Name", email: "user@user.com" },
    { key: "4", username: "User Name", email: "user@user.com" },
    { key: "5", username: "User Name", email: "user@user.com" },
    { key: "6", username: "User Name", email: "user@user.com" },
    { key: "7", username: "User Name", email: "user@user.com" },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{ width: Dimensions.get("screen").width, alignItems: "center" }}
      >
        <TouchableOpacity
          style={{
            width: "90%",
            height: 100,
            backgroundColor: ColorStyles.lightGrey,
            margin: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../Images/Tick.png")}
            //   style={{ height: 10, width: 170 }}
          />
          <View style={{ height: 50, width: "50%" }}>
            <Text style={{ fontSize: 16 }}>{item.username}</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {item.email}
            </Text>
          </View>
          <AntDesign
            name="right"
            size={26}
            color={ColorStyles.primaryColor}
            style={{ marginRight: 10, fontWeight: "bold" }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

export default UsersFlatlist;
