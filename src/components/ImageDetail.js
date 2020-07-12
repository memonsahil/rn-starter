import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, title, imageScore }) => {
  //Object destructuring turned 'props.imageSource' to 'imageSource' and so on.

  return (
    //Receiving the props from the parent component.
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
