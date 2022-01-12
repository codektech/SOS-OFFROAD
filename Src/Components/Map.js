import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Modal,
  Text,
  Button,
  Image,
} from "react-native";
import BottomlocatoionModal from "../../Src/Components/BottomlocatoionModal";
const Map = (props, { navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState({});
  const Data = [
    { latitude: 32.581937794255275, longitude: 74.05722911776739 },
    { latitude: 32.5861022318941, longitude: 74.05554713209513 },
    { latitude: 32.60255998375371, longitude: 74.04327441659954 },
  ];
  return (
    <View style={styles.container}>
      <MapView
        mapType="standard"
        showsUserLocation={true}
        // showsTraffic={true}
        moveOnMarkerPress={false}
        paddingAdjustmentBehavior="never"
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // scrollEnabled={true}
        // scrollDuringRotateOrZoomEnabled={true}
        // zoomEnabled={true}
        userInterfaceStyle="light"
      >
        {Data.map((item) => {
          const latitude = item.latitude;
          const longitude = item.longitude;
          return (
            <Marker
              key={item.latitude}
              //   style={{ height: "10%", width: "15%" }}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              //   image={require("../Images/redmarker.png")}

              onPress={() => {
                setLocation(item);
                setModalVisible(!modalVisible);
              }}
            >
              {modalVisible &&
              item.latitude === location.latitude &&
              item.longitude === location.longitude ? (
                <Image
                  source={require("../Images/bluemarker.png")}
                  style={{ height: 35, width: 35 }}
                />
              ) : (
                <Image
                  source={require("../Images/redmarker.png")}
                  style={{ height: 35, width: 35 }}
                />
              )}
            </Marker>
          );
        })}
      </MapView>

      <BottomlocatoionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default Map;
