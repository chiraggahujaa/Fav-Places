import { View, Image, StyleSheet, Text } from "react-native";
import { useState } from "react";
import CustomButton from "../Buttons/CustomButton";

// icons
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

import * as ImagePicker from "expo-image-picker";

const PhotoView = (props) => {
  const {image, setImage} = props;

  const takePhotoHandler = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);

    if (!result["canceled"]) {
      setImage(result.assets[0].uri);
    }
  };

  const pickPhotoHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    console.log(result);

    if (!result["canceled"]) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.text}>No Image added yet !!</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={takePhotoHandler}
          icon={<Entypo name="camera" size={18} color={Colors.light500} />}
        >
          Take a photo
        </CustomButton>
        <CustomButton
          onPress={pickPhotoHandler}
          icon={<Ionicons name="albums" size={18} color={Colors.light500} />}
        >
          Pick a Photo
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    // width: "80%",
    justifyContent: "space-evenly",
  },
  cameraView: {
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
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    color: Colors.light100,
  },
});

export default PhotoView;
