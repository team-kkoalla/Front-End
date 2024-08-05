import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="전체 도시, 지역 검색"
        placeholderTextColor="#ccc"
      />
    </View>
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
    marginTop: 20,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default HomeSearch;
