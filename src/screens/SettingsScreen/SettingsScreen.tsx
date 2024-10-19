import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigationTypes';

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');  // Clear JWT token
      Alert.alert('Logout', 'You have been logged out successfully!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }],  // Redirect to Auth screen
      });
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Error', 'Something went wrong during logout.');
    }
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
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
  logoutButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#F77553',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'KaushanScript-Regular',
  },
});

export default SettingsScreen;
