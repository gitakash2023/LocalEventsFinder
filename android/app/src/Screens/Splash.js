import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // // Check if the user is already authenticated (registered)
    // const user = auth().currentUser;
    // // Simulate a delay (3 seconds) before navigating to the appropriate screen
    // setTimeout(() => {
    //   if (user) {
    //     // User is already registered, navigate to Home screen
    //     navigation.navigate('Home');
    //   } else {
    //     // User is not registered, navigate to Signup screen
    //     navigation.navigate('Signup');
    //   }
    // }, 2000);
    navigation.navigate('Signup');
  }, []);
  return (
    <View>
      <Image source={require('../Image/spashImage.png')} />
    </View>
  );
};

export default Splash;
