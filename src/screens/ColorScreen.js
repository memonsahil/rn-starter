import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const randomRgb = () => {
  const Red = Math.floor(Math.random() * 256);
  const Green = Math.floor(Math.random() * 256);
  const Blue = Math.floor(Math.random() * 256);

  return `rgb(${Red}, ${Green}, ${Blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
