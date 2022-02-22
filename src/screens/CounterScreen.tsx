import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Counter: {counter} </Text>
      <Fab
        title="-1"
        position="bottomRight"
        onPress={() => setCounter(counter - 1)}
        colorBtn="subtract"
      />
      <Fab
        title="+1"
        position="bottomLeft"
        onPress={() => setCounter(counter + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Means encompass all view that Dad container allows us
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    top: -150,
    textAlign: 'center',
  },
});
