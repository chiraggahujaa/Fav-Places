import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { KeyboardAvoidingView } from "react-native";

const CustomInput = (props) => {
  const { label, placeholder, value, setter } = props;

  return (
    <View style={styles.inputView}>
      <Text style={styles.inputText}>{label}</Text>
      <KeyboardAvoidingView behavior="position" >
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={Colors.gray100}
          value={value}
          onChangeText={(text) => setter(text)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 15,
    // alignItems : "center",
  },
  inputText: {
    fontSize: 14,
    color: Colors.light100,
    marginBottom: 2,
  },
  input: {
    padding: 6,
    
    fontSize: 15,
    borderWidth: 1.5,
    borderColor: Colors.light100,
    borderRadius: 4,
    color: Colors.light100,
  },
});

export default CustomInput;
