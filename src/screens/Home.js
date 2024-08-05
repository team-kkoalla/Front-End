import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeSearch from '../components/HomeSearch';
import RegionList from '../components/RegionList';
import ProgramList from '../components/ProgramList';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeSearch />
      <RegionList />
      <ProgramList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
