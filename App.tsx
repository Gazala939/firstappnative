import React, { useState } from 'react';
import {
  ScrollView,
  RefreshControl,
  Text,
  View,
} from 'react-native';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    // simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setRefreshing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <Text>Pull down to refresh</Text>
    </ScrollView>
  );
}
