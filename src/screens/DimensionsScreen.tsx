import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.2,
          }}
        />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}H:{height}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'green',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '30%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    width: '40%',
    height: '40%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
