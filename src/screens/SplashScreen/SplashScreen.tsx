import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/images/bookStream_logo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//<Icon name="star-circle" size={30} color="#000000" />

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.image}
      />
      <Text style={styles.title}>Book Stream</Text>
      <View style={styles.iconContainer}>
        <View style={styles.line} />
        <Icon name="star-circle" size={35} color="#000000" />
        <View style={styles.line} />
      </View>
      <Text style={styles.subText}>Experience Your World of Audiobooks and E-books in a New Way</Text>
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
  subText:{
    fontFamily: 'Caudex-Bold',
    fontSize: 12,

  }

});

export default SplashScreen;
