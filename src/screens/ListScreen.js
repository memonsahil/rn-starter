import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    //Array of objects.
    { name: "Friend 1", age: 20 }, //Objects with two props - name and age.
    { name: "Friend 2", age: 23 },
    { name: "Friend 3", age: 25 },
    { name: "Friend 4", age: 44 },
    { name: "Friend 5", age: 50 },
    { name: "Friend 6", age: 55 },
    { name: "Friend 7", age: 30 },
    { name: "Friend 8", age: 22 },
    { name: "Friend 9", age: 21 },
    { name: "Friend 10", age: 20 },
    { name: "Friend 11", age: 99 },
    { name: "Friend 12", age: 100 },
    { name: "Friend 13", age: 105 },
    { name: "Friend 14", age: 75 },
    { name: "Friend 15", age: 18 },
  ];

  return (
    <FlatList //'FlatList' element.
      keyExtractor={(friend) => friend.name} //'KeyExtractor' is used to provide a key to every object. Each key for each object has to be unique, in this case the 'name' prop for each object is unique. Therefore, that's the key.
      data={friends} //'data' is used to point to the array of objects.
      renderItem={({ item }) => {
        //Object destructuring done to get 'item'. 'renderItem' renders the array.
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
  },
});

export default ListScreen;
