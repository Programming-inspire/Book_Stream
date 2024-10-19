import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import { signup } from '../../api/authApi';
import colors from '../../constants/color';

const { width, height } = Dimensions.get('window');

const SignUp: React.FC<{ onSignUpSuccess: () => void }> = ({ onSignUpSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await signup(username, email, password);
      Alert.alert('Success', 'Sign Up successful! Redirecting to Sign In...');
      onSignUpSuccess();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Text style={styles.header}>Discover, Read, and Listen !!</Text>
      <View style={styles.container}>
        <Text style={styles.title}>BookStream</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>
          {loading ? 'Signing Up...' : 'Sign Up'}
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
  signUpButton: {
    width: '80%',
    height: 50,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  signUpButtonText: {
    fontSize: 20,
    color: colors.text,
    fontFamily: 'KaushanScript-Regular',
  },
});

export default SignUp;
