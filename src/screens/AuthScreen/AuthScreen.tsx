import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AuthToggleButton from '../../components/AuthToggleButton';

const { width, height } = Dimensions.get('window');

// Images for SignIn and SignUp backgrounds
const signInBackground = require('../../../assets/images/signin-background.jpeg');
const signUpBackground = require('../../../assets/images/signup-background.jpeg');

const AuthScreen: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => setIsSignIn(!isSignIn); // Toggle state

  const backgroundImage = isSignIn ? signInBackground : signUpBackground;

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* Semi-transparent overlay */}
      <View style={styles.overlay} />

      {/* Form Container */}
      <View style={styles.formContainer}>
        {isSignIn ? <SignIn /> : <SignUp />}
      </View>

      {/* Toggle Button at the Bottom */}
      <View style={styles.toggleButtonContainer}>
        <AuthToggleButton isSignIn={isSignIn} toggle={handleToggle} />
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with 60% opacity, adjust as needed
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    width: '90%',
  },
  toggleButtonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
});
