import React from "react";
import { View, Text, FlatList, Image } from "react-native";

const ImagesFlatlist = () => {
  const Data = [
    require("../Images/car.jpg"),
    require("../Images/car1.jpg"),
    require("../Images/car2.jpg"),
    require("../Images/car3.jpg"),
    require("../Images/car4.jpg"),
    require("../Images/car5.jpg"),
  ];
  const renderItem = ({ item }) => {
    return (
      <View key={item}>
        <Image
          source={item}
          style={{
            height: 100,
            width: 170,
            borderRadius: 10,
            marginHorizontal: 20,
          }}
        />
      </View>
    );
  };
  return (
    <View style={{ height: "15%" }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default ImagesFlatlist;
