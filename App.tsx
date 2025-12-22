import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const data = [
    'One', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 20,
    gap: 15,            // space between cards (RN 0.71+)
  },

  card: {
    width: 120,
    height: 150,
    backgroundColor: '#FFECB3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
