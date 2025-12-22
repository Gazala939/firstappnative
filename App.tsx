import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const skills = [
    'React',
    'RN',
    'TypeScript',
    'SQLite',
    'Redux',
    'REST',
    'GraphQL',
    'Jest',
    'CI/CD',
  ];

  return (
    <View style={styles.container}>
      {skills.map((skill, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{skill}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',   // ⭐ important
    gap: 8,             // space between chips
    padding: 16,
    backgroundColor:'white'
  },

  chip: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,   // ⭐ makes it round
  },

  chipText: {
    fontSize: 14,
    color: '#000',
  },
});
