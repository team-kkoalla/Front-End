import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Search')}>
      <Ionicons name="search" size={25} color="#ccc" style={styles.icon} />
      <Text style={styles.inputText}>전체 도시, 지역 검색</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
});

export default HomeSearch;
