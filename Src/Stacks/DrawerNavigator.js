import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import Profile from "../Nav-Screens/Profile";
// import Bookmarks from "../Nav-Screens/Bookmarks/Bookmarks";
// import Setting from "../Nav-Screens/Settings/Setting";
// import Support from "../Nav-Screens/Support/Support";
// import TabNavigator from "./TabNavigator";
import Home from "../Screens/TeamScreens/Home";
import IonicIcon from "react-native-vector-icons/Ionicons";
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
      <View
        style={{
          width: "50%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ color: "white" }}>Availability</Text>
        <TouchableOpacity onPress={() => setAvailability(!availability)}>
          {availability ? (
            <FontAwesome name="toggle-on" size={24} color="white" />
          ) : (
            <FontAwesome name="toggle-off" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
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
          width: "60%",
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
      <Drawer.Screen name="Profile" component={Home} />
      <Drawer.Screen name="Cases" component={Home} />
      {/* <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      <Drawer.Screen name="Settings" component={Setting} />
      <Drawer.Screen name="Need Support" component={Support} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigtor;
