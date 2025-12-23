import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const students = [
    { name: "Gabriel", surname: "Rocha", age: "17" },
    { name: "Kaylen", surname: "Tyler", age: "15" },
    { name: "Lillie", surname: "Mcclure", age: "16" },
    { name: "Journey", surname: "Blackburn", age: "1,8" },
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

export default ListScreen;
