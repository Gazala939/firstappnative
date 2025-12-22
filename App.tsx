import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {

  const images = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
  ];

  return (
    <FlatList
      data={images}
      numColumns={2}            // ⭐ two columns grid
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  card: {
    flex: 1,
    margin: 6,
    borderRadius: 16,
    overflow: 'hidden',    // ⭐ important for rounded image
  },

  image: {
    width: '100%',
    height: 200,
  },
});
