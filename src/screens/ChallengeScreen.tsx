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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 100,
    height: 100,
    top: 50,
  },
  blueBox: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    width: 100,
    height: 100,
  },
});
