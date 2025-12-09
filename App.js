import { NavigateLionContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import ExcerciseScreen from "./screens/ExcerciseScreen";
import Chall from "./screens/Chall";

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigateLionContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Chall}></Stack.Screen>
      </Stack.Navigator>
    </NavigateLionContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
