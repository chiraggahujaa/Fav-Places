import { View, Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const CustomButton = (props) => {
  const { children, icon, buttonConfig, onPress } = props;

  return (
    <Pressable style={({pressed}) => [styles.pressableStyle, pressed && styles.buttonPressed]} onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style = {styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity : 0.7
  },
  container: {
    borderWidth: 1.5,
    borderColor: Colors.light100,
    padding: 10,
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginLeft: 10,
    color: Colors.light100,
  },
});

export default CustomButton;
