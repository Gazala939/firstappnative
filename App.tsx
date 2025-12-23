import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const data = [
    'One', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  ];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {data.map((item, index) => (
        <View>
            <View style={StyleSheet.divider} />
            <View key={index} style={styles.card}>
          <Text>{item}</Text>
        </View>
        {index % 4 === 0 && <View style = {styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 20,
    gap: 15,     
    backgroundColor: 'wheat'       // space between cards (RN 0.71+)
  },

  divider : {
    height:1,
    backgroundColor:'#ccc',
    flex:1
  },

});
