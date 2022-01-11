import { StyleSheet, Text, View, ScrollView } from "react-native";
import ApplicationStatus from "./Src/Screens/UserScreens/ApplicationStatus";
import EligibilityRegistration from "./Src/Screens/UserScreens/EligibilityRegistration";
import Signin from "./Src/Screens/UserScreens/Signin";
import Signup from "./Src/Screens/UserScreens/Signup";
import SplashScreen from "./Src/Screens/UserScreens/SplashScreen";
import WelcomeScreen from "./Src/Screens/UserScreens/WelcomeScreen";
export default function App() {
  return (
    // <SplashScreen />
    // <WelcomeScreen />
    // <Signin />
    // <Signup />

    // <EligibilityRegistration />
    <ApplicationStatus />
  );
}
