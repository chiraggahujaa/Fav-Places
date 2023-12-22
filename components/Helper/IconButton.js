import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const IconButton = (props) => {
  const {name, color, size, onPress} = props;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <FontAwesome name={name} size={size} color={color} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    justifyContent : "center",
    alignItems : "center"
  },
  pressed : {
    opacity : 0.7
  }
});

export default IconButton;
