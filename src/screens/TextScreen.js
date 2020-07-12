import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState(""); //Using useState for simpler state management. Adding a state for the textInput value helps access the text data.

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(updatedPassword) => {
          setPassword(updatedPassword);
        }} //Used for updating the state variable, i.e. password.
      />
      {password.length < 5 ? (
        <Text>Passsword must contain 5 or more characters.</Text>
      ) : null}
    </View>
  ); //Every time the state updates, the component rerenders, thereby re-rendering to the new state value.
  //Rendering the text tag using the ternary expression.
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default TextScreen;
