import { StyleSheet, View, Text, Pressable, Image, ScrollView } from "react-native";
import { Colors } from "../constants/colors";

const PlaceItem = (props) => {
  const { place, onSelect } = props;

  return (
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => [
        styles.pressableContainer,
        pressed && styles.onPressContainer,
      ]}
    >
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={{ uri: place.imageUri }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>{place.title}</Text>
          <Text style={styles.addressText}>{place.title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    flex: 1,
  },
  container: {
    height: 150,
    width: "100%",
    flexDirection: "row",
    borderColor: Colors.light100,
    borderWidth: 1.5,
    borderRadius: 6,
    overflow: "hidden",
  },
  onPressContainer : {
    opacity : 0.8
  },
  imageView: {
    height: "100%",
    width: 150,
    marginRight: 8,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  textView: {
    paddingVertical : 4
  },
  titleText: {
    color: Colors.light100,
    fontSize: 30,
    fontWeight: "800",
  },
  addressText: {
    color: Colors.light100,
    fontSize: 14,
  },
});

export default PlaceItem;
4;
