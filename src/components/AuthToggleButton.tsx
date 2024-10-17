import React from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import colors from '../constants/color';

type AuthToggleButtonProps = {
  isSignIn: boolean;
  toggle: () => void;
};

const AuthToggleButton: React.FC<AuthToggleButtonProps> = ({ isSignIn, toggle }) => {
  const translateX = new Animated.Value(isSignIn ? 0 : 110); // Adjust to half the width of the slider

  // Animate on toggle
  Animated.timing(translateX, {
    toValue: isSignIn ? 0 : 110, // Move the slider to the right
    duration: 300,
    useNativeDriver: true,
  }).start();

  return (
    <TouchableWithoutFeedback onPress={toggle}>
      <View style={styles.toggleContainer}>
        <Animated.View style={[styles.slider, { transform: [{ translateX }] }]} />
        <View style={styles.labelsContainer}>
          <Text style={[styles.label, isSignIn && styles.activeLabel]}>SignIn</Text>
          <Text style={[styles.label, !isSignIn && styles.activeLabel]}>SignUp</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 220, // Adjust as needed
    height: 80, // Increased height
    borderRadius: 10,
    backgroundColor: colors.toggleBackground,
    position: 'relative',
    justifyContent: 'center',
  },
  slider: {
    width: 110, // Half of the toggle container width
    height: 80, // Increased height of the slider
    backgroundColor: '#F8F2DA',
    borderRadius: 10,
    position: 'absolute',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20, // Increased font size for better visibility
    color: colors.inactiveText,
  },
  activeLabel: {
    fontWeight: 'bold',
    color: colors.activeText,
  },
});

export default AuthToggleButton;
