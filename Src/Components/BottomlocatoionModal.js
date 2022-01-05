import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ColorStyles from "../Colors/ColorStyles";

const BottomlocatoionModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => console.log("hi")}
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
        <View
          style={{
            width: "100%",
            height: "45%",
            // backgroundColor: "black",
            justifyContent: "space-evenly",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../Images/carimage.png")}
            style={{ height: 90, width: 120, borderRadius: 10, marginTop: 10 }}
          />
          <View
            style={{
              width: "50%",
              //    backgroundColor: "green"
            }}
          >
            <Text style={{ fontSize: 19 }}>Location Name</Text>
            <View
              style={{
                width: "90%",
                // backgroundColor: "yellow",
                marginTop: 10,
                height: "65%",
              }}
            >
              <ScrollView showsHorizontalScrollIndicator={false}>
                <Text style={{ fontSize: 13 }}>
                  This is the Description of case will be written by user This
                  is the Description of case will be written by user This is the
                  the Description of case will be written by user This is the
                  the Description of case will be written by user This is the
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "25%",
            flexDirection: "row",
            justifyContent: "space-around",
            // backgroundColor: "green",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              backgroundColor: "white",
              borderColor: ColorStyles.primaryColor,
              borderWidth: 2,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: ColorStyles.primaryColor }}>REJECT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              backgroundColor: ColorStyles.primaryColor,
              borderRadius: 20,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "whites" }}>ACCEPT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    height: "30%",
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
export default BottomlocatoionModal;
