import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const Chall = () => {
    let message = "Test!";
    message = "Test 123";
    return (
        <View>
        <Text style={styles.bigText}> {message}</Text> 
        </View>
    )
};

const styles = StyleSheet.create({
    bigText: {
        fontSize: 35,
        color: "#9c1313ff",
    }
});

export default Chall;