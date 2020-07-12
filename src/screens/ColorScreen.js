import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]); //Using useState() for state management. Initial value of colors is set as an empty array.
  //console.log(colors);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]); //'setColor()' updates the 'colors' array (state variable) by rerendering the entire object with the updated value from 'randomRgb()'.
        }}
      />
      <FlatList
        keyExtractor={(item) => item} //Each key for each object has to be different, in this case, the 'item' itself will be random.
        data={colors} //Points to the list source - 'colors'.
        renderItem={({ item }) => {
          //Object destructuring done here. Arrow function has the parameter 'item' that contains a random value in this format - rgb(a,b,c) of 'colors'.
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const Red = Math.floor(Math.random() * 256);
  const Green = Math.floor(Math.random() * 256);
  const Blue = Math.floor(Math.random() * 256);

  return `rgb(${Red}, ${Green}, ${Blue})`; //String interpolation.
};

const styles = StyleSheet.create({});

export default ColorScreen;
