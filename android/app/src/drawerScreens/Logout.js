import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  NativeEventEmitter,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

const Logout = () => {
  const navigation = useNavigation();

  const [isLodingLogout, setIsLodingLogout] = useState(false);
  //  handleLogout
  const handleLogout = () => {
    setIsLodingLogout(true);
    auth()
      .signOut()
      .then(res => {
        setIsLodingLogout(false);
        Alert.alert('logged out');
        navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert(error);
      })
      .finally(() => {
        setIsLodingLogout(false); // Clear the logout in progress, whether it succeeded or failed
      });
  };
  return (
    <View style={{alignSelf: 'flex-end'}}>
      <View>
        {isLodingLogout ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={require('../Image/logOut.jpg')}
              style={styles.logoutButton}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logoutButton: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginRight: 20,
  },
});

export default Logout;
