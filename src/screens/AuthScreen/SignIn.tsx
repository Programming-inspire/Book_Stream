// src/screens/AuthScreen/SignIn.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../api/authApi';
import colors from '../../constants/color';

const { width, height } = Dimensions.get('window');

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await login(email, password);
      await AsyncStorage.setItem('token', response.token);
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Text style={styles.header}>Your Books Are Waiting here!!</Text>
      <View style={styles.container}>
        <Text style={styles.title}>BookStream</Text>

        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor={colors.inactiveText}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor={colors.inactiveText}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height * 0.5,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(206, 206, 206, 0.8)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.text,
  },
  header: {
    fontSize: 25,
    color: colors.text,
    fontFamily: 'KaushanScript-Regular',
    textAlign: 'center',
    bottom: 10,
  },
  title: {
    fontSize: 25,
    color: colors.text,
    fontFamily: 'KaushanScript-Regular',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: colors.text,
    marginBottom: 15,
    fontSize: 18,
    color: colors.text,
    fontFamily: 'KaushanScript-Regular',
  },
  signInButton: {
    width: '80%',
    height: 50,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  signInButtonText: {
    fontSize: 20,
    color: colors.text,
    fontFamily: 'KaushanScript-Regular',
  },
});

export default SignIn;
