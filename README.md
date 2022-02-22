# Counter App - React Native

# Create a React native App with TypeScript command line

- `npx react-native init NameTSProject --template react-native-template-typescript`

# Different ways to style components

## 1. Inline style

```js
import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
        }}>
        Hello Sexy
      </Text>
    </View>
  );
};

export default App;
```

<details >
<summary>Check result in iOS & Android</summary>

![View](./src/screenshots/1.png)

</details>

## 2. Using the styles object

```js
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Counter: {counter} </Text>
      <Fab
        title="-1"
        position="bottomRight"
        onPress={() => setCounter(counter - 1)}
        colorBtn="subtract"
      />
      <Fab
        title="+1"
        position="bottomLeft"
        onPress={() => setCounter(counter + 1)}
      />
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
});
```

#
