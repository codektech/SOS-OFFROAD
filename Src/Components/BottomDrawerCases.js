import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import ColorStyles from "../Colors/ColorStyles";
import { Feather } from "@expo/vector-icons";
const BottomDrawerCases = (props) => {
  const { modalvisible, setModalvisible } = props;
  const Data = [
    { caseno: "1sfdakh6", date: new Date() },
    { caseno: "1sfdakh8", date: new Date() },
    { caseno: "1sfdak68", date: new Date() },
    { caseno: "1sfdah68", date: new Date() },
    { caseno: "1sfdkh68", date: new Date() },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: 280,
          height: 120,
          backgroundColor: ColorStyles.lightGrey,
          marginBottom: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "70%",
            // backgroundColor: "green",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "35%",
              height: "90%",
              //   backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: ColorStyles.redColor,
              }}
            ></View>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: ColorStyles.primaryColor,
                marginLeft: 40,
                position: "absolute",
              }}
            ></View>
          </View>
          <Text style={{ color: ColorStyles.redColor, fontSize: 17 }}>
            CASE # {item.caseno}
          </Text>
        </View>
        <View
          style={{
            width: "60%",
            height: "30%",
            // backgroundColor: "black",
            marginLeft: "10%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Feather name="calendar" size={24} color="black" />
          <Text>{item.date.toDateString()}</Text>
        </View>
      </View>
    );
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalvisible}>
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => setModalvisible(!modalvisible)}
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "grey",
            opacity: 0.2,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "15%",
              height: 5,
              backgroundColor: "black",
              borderRadius: 15,
            }}
          ></View>
        </TouchableOpacity>
        <Text style={{ marginRight: "70%", marginTop: "10%", fontSize: 15 }}>
          Today
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.caseno}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    height: "50%",
    // justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default BottomDrawerCases;
