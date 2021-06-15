import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Sahil";

  return (
    <View>
      <Text style={styles.Heading}>Getting started with React Native!</Text>
      <Text style={styles.SubHeading}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: 45,
  },
  SubHeading: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
