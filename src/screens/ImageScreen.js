import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  //Parent component.
  return (
    <View>
      <ImageDetail //Imported child component.
        title="Forest" //Sending these created props (along with their values) to the child component.
        imageSource={require("../../assets/forest.jpg")} //'require()' function used to point to its location.
        imageScore={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={8}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
