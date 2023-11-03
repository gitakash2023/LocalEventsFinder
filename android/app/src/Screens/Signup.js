import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isInputValid = email.length > 0 && password.length > 0;

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('signup');
        navigation.navigate('HomeScreen');
        alert('Success', 'User account created and signed in successfully!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Error', 'That email address is already in use.');
        }

        if (error.code === 'auth/invalid-email') {
          alert('Error', 'That email address is invalid.');
        }
      })
      .finally(() => {
        setEmail('');
        setPassword('');
      });
  };
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  // handleEmptyEmail
  const handleEmptyEmail = () => {
    setEmail('');
  };
  // handleEmptyPassword
  const handleEmptyPassword = () => {
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputFlex}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          {email.length > 0 && (
            <View>
              <TouchableOpacity onPress={handleEmptyEmail}>
                <Image
                  source={require('../Image/cancel.jpg')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.inputFlex}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>

          {password.length > 0 && (
            <View>
              <TouchableOpacity onPress={handleEmptyPassword}>
                <Image
                  source={require('../Image/cancel.jpg')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {isInputValid && (
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.loginLink} onPress={navigateToLogin}>
        Already have an account? Log in
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    width: 330,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputFlex: {
    flexDirection: 'row',
  },
  cancle: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  signupButton: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
    color: 'green',
    fontSize: 16,
  },
});

export default Signup;
