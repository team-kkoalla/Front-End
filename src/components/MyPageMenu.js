import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const MyPageMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Like')}>
        <View style={styles.menuIconText}>
          <Ionicons name="heart-outline" size={24} style={styles.icon} />
          <Text style={styles.menuText}>내가 찜한 양조장</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BookingList')}>
        <View style={styles.menuIconText}>
          <Ionicons name="calendar-outline" size={24} style={styles.icon} />
          <Text style={styles.menuText}>예약현황 관리</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Badge')}>
        <View style={styles.menuIconText}>
          <Ionicons name="ribbon-outline" size={24} style={styles.icon} />
          <Text style={styles.menuText}>나의 업적</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Logout')}>
        <View style={styles.menuIconText}>
          <Ionicons name="log-out-outline" size={24} style={styles.icon} />
          <Text style={styles.menuText}>로그아웃</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} style={styles.chevron} />
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
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chevron: {
    color: '#000',
  },
});

export default MyPageMenu;
