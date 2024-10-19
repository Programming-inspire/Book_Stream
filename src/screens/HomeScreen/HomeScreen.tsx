import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Icon name="search-sharp" size={18} color="#FFFFFF" />
          <TextInput
            placeholder="Search your “Book”"
            placeholderTextColor="#FFFFFF"
            style={styles.searchInput}
          />
        </View>
      </View>
      <Text style={styles.content}>Welcome to Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE8CD',
  },
  header: {
    height: 70,
    backgroundColor: '#F2F1DE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: width * 0.9,
    height: 40,
  },
  searchInput: {
    marginLeft: 8,
    color: '#FFFFFF',
    flex: 1,
  },
  content: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default HomeScreen;
