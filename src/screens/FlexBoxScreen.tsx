import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 500,
    // height: 500,
    backgroundColor: '#28C4D9',
    justifyContent: 'space-evenly',
  },
  boxOne: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  boxTwo: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  boxThree: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
