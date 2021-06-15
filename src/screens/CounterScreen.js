import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'add' || 'subtract', payload: 1 || -1}

  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.payload };
    case "subtract":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "add", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "subtract", payload: -1 });
        }}
      />
      <Text>Current count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;
