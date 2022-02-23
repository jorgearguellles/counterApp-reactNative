import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ChallengeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  purpleBox: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
  },
  orangeBox: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    flex: 1,
    width: 100,
    height: 100,
  },
  blueBox: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    width: 100,
    height: 100,
  },
});
