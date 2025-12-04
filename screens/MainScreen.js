import React from "react";
import { text, StyleSheet, View } from "react-native"

const MainScreen = () => {
  return (
    <View>
      <Text>This is Main Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aaa",
        alignItems: "center",
        justifyContent: "center",
},
textStyle: {
    fontSize: 24,
},
});

export default MainScreen;``