import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LogoutMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.menuText}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Unregister')}>
        <Text style={styles.menuText}>회원탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogoutMenu;
