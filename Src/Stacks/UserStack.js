import React from "react";
import { View, Text } from "react-native";
import ApplicationStatus from "../../Src/Screens/UserScreens/ApplicationStatus";
import EligibilityRegistration from "../../Src/Screens/UserScreens/EligibilityRegistration";
import Signin from "../../Src/Screens/UserScreens/Signin";
import Signup from "../../Src/Screens/UserScreens/Signup";
import SplashScreen from "../../Src/Screens/UserScreens/SplashScreen";
import WelcomeScreen from "../../Src/Screens/UserScreens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const UserStack = () => {
  const StacK = createStackNavigator();
  return (
    <StacK.Navigator screenOptions={{ headerShown: false }}>
      <StacK.Screen name="SplashScreen" component={SplashScreen} />
      <StacK.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <StacK.Screen name="Signin" component={Signin} />
      <StacK.Screen name="Signup" component={Signup} />
      <StacK.Screen
        name="EligibilityRegistration"
        component={EligibilityRegistration}
      />
      <StacK.Screen name="ApplicationStatus" component={ApplicationStatus} />
    </StacK.Navigator>
  );
};

export default UserStack;
