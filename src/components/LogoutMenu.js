import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LogoutMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Login')}>
        <View style={styles.textContainer}>
          <Text style={styles.menuText}>로그아웃</Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Unregister')}>
        <View style={styles.textContainer}>
          <Text style={styles.menuText}>회원탈퇴</Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default LogoutMenu;
