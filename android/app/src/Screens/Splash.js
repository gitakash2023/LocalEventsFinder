import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate('Signup');
  });

  return (
    <View>
      <View>
        <Image source={require('../Image/splash1.jpg')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
