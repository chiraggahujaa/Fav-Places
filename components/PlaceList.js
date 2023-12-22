import { View, Text, StyleSheet, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../constants/colors";
import { useSelector } from "react-redux";

const PlaceList = (props) => {
  const { favPlaces } = props;
  console.log(favPlaces);

  return (
    <View style={styles.container}>
      {!favPlaces || favPlaces.length === 0 ? (
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>No Fav Place added yet !!</Text>
        </View>
      ) : (
        <FlatList
          renderItem={({ item }) => <PlaceItem place={item} />}
          data={favPlaces}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.light100,
  },
});

export default PlaceList;
