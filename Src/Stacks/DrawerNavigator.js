import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../Screens/AdminScreens/Home";
import Applications from "../Screens/AdminScreens/Applications";
import Cases from "../Screens/AdminScreens/Cases";
import RegisteredUsers from "../Screens/AdminScreens/RegisteredUsers";
import ColorStyles from "../Colors/ColorStyles";
const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
  const [availability, setAvailability] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: ColorStyles.primaryColor }}>
      <View style={{ height: "10%" }}></View>
      <View
        style={{
          width: "85%",
          height: "10%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            height: "90%",
            width: 2,
            backgroundColor: "white",
          }}
        ></View>
        <Text style={{ color: "white", fontSize: 22 }}>SOS{"\n"}OFFROAD</Text>
      </View>
      <View style={{ height: "25%" }}></View>
      <DrawerItemList {...props} />
      <View style={{ height: "10%" }}></View>
    </View>
  );
};
const DrawerNavigtor = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerActiveTintColor: ColorStyles.lightGrey,
        drawerInactiveTintColor: "white",
        drawerStyle: { width: "70%" },
        drawerItemStyle: {
          width: "70%",
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        },
        // drawerIcon: ({ focused, color, size, padding }) => {
        //   let iconName;
        //   if (route.name === "Home") {
        //     iconName = focused ? "home" : "home-outline";
        //   } else if (route.name === "Bookmarks") {
        //     iconName = focused ? "bookmark" : "bookmark-outline";
        //   } else if (route.name === "Settings") {
        //     iconName = focused ? "settings" : "settings-outline";
        //   } else if (route.name === "Need Support") {
        //     iconName = focused ? "help" : "help-circle";
        //   }
        //   return (
        //     <IonicIcon
        //       name={iconName}
        //       size={size}
        //       color={color}
        //       style={{ paddingBottom: padding }}
        //     />
        //   );
        // },
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cases" component={Cases} />
      <Drawer.Screen name="Applications" component={Applications} />
      <Drawer.Screen name="RegisteredUsers" component={RegisteredUsers} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigtor;
