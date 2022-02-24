/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <CounterScreen />
    </SafeAreaView>
  );
};
