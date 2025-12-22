import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      }}
      style={styles.bg}
    >
      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Text content */}
      <Text style={styles.title}>Learn React Native</Text>
      <Text style={styles.subtitle}>Build once. Run everywhere.</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
  },

  subtitle: {
    marginTop: 6,
    color: '#fff',
  },
});
