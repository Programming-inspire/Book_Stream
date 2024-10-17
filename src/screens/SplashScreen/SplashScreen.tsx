import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../assets/images/bookStream_logo.png';
import { useSplashAnimations } from '../../utils/useSplashAnimations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigationTypes';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const { springAnim, fadeAnim } = useSplashAnimations();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={Logo} 
        style={[styles.image, { transform: [{ scale: springAnim }] }]} 
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Book Stream
      </Animated.Text>
      <View style={styles.iconContainer}>
        <View style={styles.line} />
        <Icon name="star-circle" size={35} color="#000000" />
        <View style={styles.line} />
      </View>
      <Animated.Text style={[styles.subText, { opacity: fadeAnim }]}>
        Experience Your World of Audiobooks and E-books in a New Way
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F2DA',
  },
  image: {
    width: 312,
    height: 273,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Caudex-Bold',
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 41,
    marginLeft: 30,
  },
  line: {
    height: 5,
    width: 130,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  subText: {
    fontFamily: 'Caudex-Bold',
    fontSize: 12,
    marginTop: 10,
  },
});

export default SplashScreen;
