import React from 'react';
import {text, StyleSheet, View} from "react-native";

// JSX - next gen JavaScript

const ExcerciseScreen = () => {
    let message = "Hi there!";
    message = "Hi there from Digital School";
    return (
        <View>
        <Text> style={styles.bigText}{message}</Text>
        <Text>Drugi tekst</Text>
        </View>
    )
};

const styles = StyleSheet.create({
        bigText:{
            fontSize: 24,
        }
})


export default ExcerciseScreen;