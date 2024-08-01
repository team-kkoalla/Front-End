import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

const Login = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" />
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
