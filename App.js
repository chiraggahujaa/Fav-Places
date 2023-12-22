import { StatusBar } from "react-native";
import IconButton from "./components/Helper/IconButton";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import AddPlaceScreen from "./screens/AddPlaceScreen";
import AllPlaces from "./screens/AllPlaces";
import PlaceScreen from "./screens/PlaceScreen";
import MapScreen from "./screens/MapScreen";

// store
import { Provider } from "react-redux";
import store from "./store/store";

import {Colors} from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AllPlaces"
          screenOptions={{
            headerTintColor: Colors.light100,
            headerStyle: { backgroundColor: Colors.dark1000 },
            contentStyle: { backgroundColor: Colors.dark1000 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "My Favourite Places",
              tintColor: Colors.light500,
              headerRight: ({ tintColor }) => (
                <IconButton
                  size={20}
                  name="plus"
                  color={Colors.light500}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlaceScreen}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen name="Place" component={PlaceScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </Provider>
  );
}
