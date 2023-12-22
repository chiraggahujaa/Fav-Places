import { StyleSheet, View, Text } from "react-native";
import { useState, useRef } from "react";

// location
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

// helper
import { Colors } from "../../constants/colors";
import CustomButton from "../Buttons/CustomButton";

// icons
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LocationView = props => {
  const { location, setLocation, region, setRegion } = props;
  const [loading, setLoading] = useState(false);

  const locateUserHandler = async () => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      console.log(latitude, longitude);

      setRegion({
        latitude,
        longitude,
      });
      
      // console.log(currentLocation);
      setLocation(currentLocation.coords);
      setLoading(false);
    } catch (error) {
      console.error("Error getting location: ", error);
    }
  };

  const pickOnMapHandler = () => {};

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    // console.log(coordinate);
    setRegion({ latitude, longitude });
    setLocation({ latitude, longitude });
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        {region ? (
          <MapView
            style={styles.map}
            region={region}
            onPress={handleMapPress}
            showsUserLocation
          >
            <Marker coordinate={location} title="My Location" />
          </MapView>
        ) : loading ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <Text style={styles.text}>No Location added yet !!</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          icon={
            <FontAwesome name="map-marker" size={18} color={Colors.light500} />
          }
          onPress={locateUserHandler}
        >
          Locate a User
        </CustomButton>
        <CustomButton
          onPress={pickOnMapHandler}
          icon={<Ionicons name="map" size={18} color={Colors.light500} />}
        >
          Pick on map
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    color: Colors.light100,
  },
  buttonContainer: {
    flexDirection: "row",
    // width: "80,
    justifyContent: "space-evenly",
  },
  mapView: {
    marginBottom: 8,
    height: 250,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.light100,
    borderWidth: 1.5,
    borderRadius: 4,
  },
  fallBackText: {
    color: Colors.light100,
    fontSize: 14,
  },
  map: {
    // flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default LocationView;
