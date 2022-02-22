import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  position?: 'bottomRight' | 'bottomLeft';
  colorBtn?: 'add' | 'subtract';
  onPress: () => void;
}

export const Fab = ({
  title,
  onPress,
  position = 'bottomRight',
  colorBtn = 'add',
}: Props) => {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        styles.fabBottomLocation,
        position === 'bottomLeft' ? styles.fabLeft : styles.fabRight,
      ]}>
      <View
        style={[
          styles.fab,
          colorBtn === 'add' ? styles.fabBGColorAdd : styles.fabBGColorSubtract,
        ]}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <View
      style={[
        styles.fabBottomLocation,
        position === 'bottomLeft' ? styles.fabLeft : styles.fabRight,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('blue', false, 30)}>
        <View
          style={[
            styles.fab,
            colorBtn === 'add'
              ? styles.fabBGColorAdd
              : styles.fabBGColorSubtract,
          ]}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabBottomLocation: {
    position: 'absolute',
    bottom: 70,
  },
  fabRight: {
    right: 40,
  },
  fabLeft: {
    left: 40,
  },
  fab: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  fabBGColorAdd: {
    backgroundColor: 'green',
  },
  fabBGColorSubtract: {
    backgroundColor: 'red',
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
