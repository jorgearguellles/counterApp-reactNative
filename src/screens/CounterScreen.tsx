/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = ( num:number ) => {
    setCounter( counter + num);
  }
  return (
    <View
      style={{
        flex: 1, // Means encompass all view that Dad container allows us
        backgroundColor: 'yellow',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -150,
        }}>
        Counter: {counter}
      </Text>
      <Button
        onPress={() => handleCounter(1)}
        title="Add +1"
        color="#841584"
        accessibilityLabel="Add button"
      />
      <Button
        onPress={() => handleCounter(-1)}
        title="Subtract -1"
        color="#841584"
        accessibilityLabel=" Subtract button"
      />
    </View>
  );
};
