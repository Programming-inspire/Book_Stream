import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LibraryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Library!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAE8CD',
  },
  content: {
    fontSize: 24,
  },
});

export default LibraryScreen;
