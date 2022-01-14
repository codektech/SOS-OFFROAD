import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import ColorStyles from "../Colors/ColorStyles";
import { useNavigation } from "@react-navigation/native";
const RegisteredUsersFlatlist = () => {
  const navigation = useNavigation();
  const Data = [
    { img: require("../Images/car.jpg"), username: "Cameron Williamson" },
    { img: require("../Images/car1.jpg"), username: "Cameron Williamson" },
    { img: require("../Images/car2.jpg"), username: "Cameron Williamson" },
    { img: require("../Images/car3.jpg"), username: "Cameron Williamson" },
    { img: require("../Images/car4.jpg"), username: "Cameron Williamson" },
    { img: require("../Images/car5.jpg"), username: "Cameron Williamson" },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{ width: Dimensions.get("screen").width, alignItems: "center" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("AdminViewUser", item)}
          style={{
            width: "90%",
            height: 100,
            backgroundColor: ColorStyles.lightGrey,
            margin: 5,
            alignItems: "center",
            flexDirection: "row",
            // justifyContent: "space-around",
            borderRadius: 15,
          }}
        >
          <Image
            source={item.img}
            style={{
              height: 70,
              width: 70,
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {item.username}
          </Text>
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

export default RegisteredUsersFlatlist;
