import {SafeAreaView} from 'react-native';
import MyPageProfile from '../components/MyPageProfile';
import MyPageMenu from '../components/MyPageMenu';
import React from 'react';

const MyPage = () => {
  return (
    <SafeAreaView>
      <MyPageProfile />
      <MyPageMenu />
    </SafeAreaView>
  );
};

export default MyPage;
