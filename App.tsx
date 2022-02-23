/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlexBoxScreen} from './src/screens/FlexBoxScreen';

export const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlexBoxScreen />
    </SafeAreaView>
  );
};
