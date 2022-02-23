/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ChallengeScreen} from './src/screens/ChallengeScreen';

export const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ChallengeScreen />
    </SafeAreaView>
  );
};
