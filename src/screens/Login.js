import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/authActions';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLoggedIn(true));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen (Placeholder)</Text>
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
