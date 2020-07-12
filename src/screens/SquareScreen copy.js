import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20; //All-caps usally means its a special variable often used to represent a configuration VALUE.

const SquareScreen = () => {    //Parent component.
    const [red, setRed] = useState(0);  //Setting three states for each child component.
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

     const setColor = (color, change) => { //Helper function for updating the value of the state variables ('red', 'green', 'blue') within the limit (0-255).
          //color === 'red, 'green', 'blue
          //change === COLOR_INCREMENT, -1 * COLOR_INCREMENT
          
          switch (color) {
               case 'red':
                    red + change > 255 || red + change < 0 ? null : setRed(red + change); //Ternary expression, same as the if statement.
                    //if (color === 'red') {
                    //   if (red + change > 255 || red + change < 0)
                    //     return;
                    //   else {
                    //     setRed(red + change);
                    //}
                    return;
               case 'green':
                    green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                    return;
               case 'blue':
                    blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                    return;
               default:
                    return;
          }
     };

    return (    //Child component.
        <View>
           <ColorCounter 
                onIncrease = {() => { setColor( 'red', COLOR_INCREMENT ) }}  //Passing three props with two arrow functions and one string value.
                onDecrease = {() => { setColor( 'red', -1 * COLOR_INCREMENT ) }}
                color = "Red" />
           <ColorCounter
                onIncrease = {() => { setColor( 'green', COLOR_INCREMENT ) }}
                onDecrease = {() => { setColor( 'green', -1 * COLOR_INCREMENT ) }}
                color = "Green"
                />
           <ColorCounter
                onIncrease = {() => { setColor( 'blue', COLOR_INCREMENT ) }}
                onDecrease = {() => { setColor( 'blue', -1 * COLOR_INCREMENT ) }}
                color = "Blue"
           />
           <View
               style = {{
                   height: 150,
                   width: 150,
                   backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
           />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;