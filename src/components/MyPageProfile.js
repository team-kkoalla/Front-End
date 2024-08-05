import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const MyPageProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://via.placeholder.com/100'}} // 이미지 주소
        style={styles.profileImage}
      />
      <Text style={styles.userName}>사용자 이름</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  userName: {
    fontSize: 18,
    marginLeft: 16,
  },
});

export default MyPageProfile;
