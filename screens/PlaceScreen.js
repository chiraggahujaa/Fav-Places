import { View, Text, StyleSheet } from "react-native";

const PlaceScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Fav Place Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlaceScreen;
