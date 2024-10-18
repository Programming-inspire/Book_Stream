import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../../constants/color';

const { width, height } = Dimensions.get('window');

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Text style={styles.header}>Your Books Are Waiting here!!</Text>
    <View style={styles.container}>
      <Text style={styles.title}>BookStream</Text>

      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor={colors.inactiveText}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor={colors.inactiveText}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
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
    bottom:10,
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
