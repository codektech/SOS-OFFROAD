import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
const PendingCasesFlatlist = () => {
  const Data = [
    {
      caseno: "12345",
      location: "Location name",
      description: "this tisldfjasldjfsdaksdfhklahfasofhasjk",
      invitesent: "20",
      support: "3",
    },
    {
      caseno: "12345",
      location: "Location name",
      description: "this tisldfjasldjfsdaksdfhklahfasofhasjk",
      invitesent: "20",
      support: "4",
    },
    {
      caseno: "12345",
      location: "Location name",
      description: "this tisldfjasldjfsdaksdfhklahfasofhasjk",
      invitesent: "20",
      support: "2",
    },
    {
      caseno: "12345",
      location: "Location name",
      description: "this tisldfjasldjfsdaksdfhklahfasofhasjk",
      invitesent: "20",
      support: "1",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "90%",
          backgroundColor: ColorStyles.lightGrey,
          borderRadius: 20,
          margin: 10,
          padding: 20,
          height: 170,
          alignSelf: "center",
        }}
      >
        <View style={{ width: "100%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Case # {item.caseno}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            // backgroundColor: "black",
          }}
        >
          <Image
            source={require("../Images/car.jpg")}
            style={{ width: "40%", height: "70%", borderRadius: 20 }}
          />
          <View style={{ width: "50%", height: "100%" }}>
            <Text style={{ fontSize: 15 }}>{item.location}</Text>
            <Text style={{ fontSize: 15 }}>{item.description}</Text>
            <View style={{ height: 10 }}></View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Invites sent : {item.invitesent}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Support : {item.support}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.support}
    >
      <Text></Text>
    </FlatList>
  );
};

export default PendingCasesFlatlist;
