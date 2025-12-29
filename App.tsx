import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: dark ? '#000' : '#fff',
      }}
    >
      <Text
        style={{
          marginBottom: 10,
          color: dark ? '#fff' : '#000',
          fontSize: 18,
        }}
      >
        Dark Mode
      </Text>

      <Switch
        value={dark}
        onValueChange={setDark}
      />
    </View>
  );
}
