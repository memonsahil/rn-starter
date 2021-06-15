import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 120,
    width: 120,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 120,
    width: 120,
    backgroundColor: "green",
    top: 120,
  },
  viewThreeStyle: {
    height: 120,
    width: 120,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
