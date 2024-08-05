import {SafeAreaView, Text} from 'react-native';
import BadgeDetail from '../components/BadgeDetail';
import BadgeList from '../components/BadgeList';
import React from 'react';

const Badge = () => {
  return (
    <SafeAreaView>
      <BadgeDetail />
      <BadgeList />
    </SafeAreaView>
  );
};

export default Badge;
