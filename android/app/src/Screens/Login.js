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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isInputValid = email.length > 0 && password.length > 0;

  const handleLogin = () => {};
  const navigateToLogin = () => {
    navigation.navigate('Signup');
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
      <Text style={styles.title}>Login</Text>

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
        <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.loginLink} onPress={navigateToLogin}>
        Don't have an account? Signup
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
  LoginButton: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  LoginButtonText: {
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

export default Login;
