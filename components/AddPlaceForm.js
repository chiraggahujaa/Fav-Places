import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { Colors } from "../constants/colors";

import PhotoView from "./Helper/PhotoView";
import MapView from "./Helper/LocationView";
import CustomInput from "./Helper/CustomInput";

import { useDispatch } from "react-redux";
import { favActions } from "../store/favSlice";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AddPlaceForm = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddPlace = () => {
    dispatch(
      favActions.addFav({
        fav: {
          title,
          imageUri: image,
          location: region,
        },
      })
    );

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <CustomInput
        label="Title"
        placeholder="Enter Title"
        value={title}
        setter={setTitle}
      />
      <PhotoView image={image} setImage={setImage} />
      <MapView
        location={location}
        setLocation={setLocation}
        region={region}
        setRegion={setRegion}
      />
      <View style={{ width: "100%" }}>
        <Button
          title="Add Place"
          onPress={handleAddPlace}
          color={Colors.ligth700}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default AddPlaceForm;
