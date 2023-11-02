import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //  function for singup
  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('User account created & signed in!');
        console.log(res);

        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };
  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}></TextInput>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}></TextInput>
      <TouchableOpacity onPress={handleSignup}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
