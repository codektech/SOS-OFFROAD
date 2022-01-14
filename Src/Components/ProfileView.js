import React from "react";
import { View, Text, Image } from "react-native";

const ProfileView = () => {
  return (
    <View
      style={{
        height: "15%",
        width: "90%",
        flexDirection: "row",
        // justifyContent: "space-",
        // backgroundColor: "green",
        marginTop: 20,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../Images/car1.jpg")}
        style={{ height: 90, width: 90, borderRadius: 25 }}
      />
      <Text style={{ marginLeft: 20, fontSize: 19, fontWeight: "bold" }}>
        User Name here
      </Text>
    </View>
  );
};

export default ProfileView;
