import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export const BoxModelScreen = () => {
  return (
    <SafeAreaView style={styles.containerScreen}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Box Model Screen</Text>
        <Text style={styles.title}>Box Model Screen</Text>
        <Text style={styles.title}>Box Model Screen</Text>
        <Text style={styles.title}>Box Model Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: 'red',
  },
  containerText: {
    borderColor: 'blue',
    borderWidth: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    width: 150,
    borderWidth: 10,
    borderColor: 'green',
    padding: 40,
  },
});
