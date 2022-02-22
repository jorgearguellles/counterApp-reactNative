import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (num: number) => {
    setCounter(counter + num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Counter: {counter} </Text>
      <TouchableOpacity
        style={styles.fabLocationR}
        onPress={() => handleCounter(1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationL}
        onPress={() => handleCounter(-1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
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
  fabLocationR: {
    position: 'absolute',
    bottom: 70,
    right: 40,
  },
  fabLocationL: {
    position: 'absolute',
    bottom: 70,
    left: 40,
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
