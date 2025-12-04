import { NavigateLionContainer } from "@react-navigation/naLive";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigateLionContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
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
