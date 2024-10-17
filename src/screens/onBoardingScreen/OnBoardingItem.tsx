import { View, Text, StyleSheet, Image, useWindowDimensions, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Slide } from '../../types/slide';
import PlayButton from '../../components/PlayButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigationTypes';
import colors from '../../constants/color';

const OnBoardingItem = ({ item, isLast, navigation }: { item: Slide; isLast: boolean; navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'> }) => {
  const { width } = useWindowDimensions();

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      scaleAnim.setValue(1);
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start(animate);
      });
    };

    animate();

    return () => {
      scaleAnim.setValue(1);
    };
  }, [scaleAnim]);

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.description}</Text>
      </View>
      <Image source={item.image} style={[styles.image, { width }]} />
      {isLast && (
        <View style={styles.playbtn}>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <PlayButton onPress={() => navigation.replace('Auth')} />
          </Animated.View>
        </View>
      )}
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  textContainer: {
    flex: 0.3,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    flex: 0.7,
    resizeMode: 'contain',
  },
  titleText: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 35,
    lineHeight: 45,
    textAlign: 'center',
    marginTop: 50,
    color: colors.text,
  },
  playbtn: {
    position: 'absolute',
    top: '60%',
    left: '40%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
});
