import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const students = [
    { name: "john", surname: "johnson", age: "34" },
    { name: "tim", surname: "ronald", age: "22" },
    { name: "carl", surname: "west", age: "53" },
    { name: "trevor", surname: "Blackburn", age: "32" },
    { name: "amanda", surname: "philps", age: "32" },
];

const ListScreen = () => {
    return (
        <View>
            <Text>List of Students</Text>
            <FlatList
                data={students}
                renderItem={({ item }) => {
                    return (
                        <Text>
                            {item.name} {item.surname} - {item.age}
                        </Text>
                    );
                }}
            />
        </View>)
}

const style = StyleSheet.create({});

export default chall2;
