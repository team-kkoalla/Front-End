import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BreweryItem from '../components/common/BreweryItem';

const breweries = [
  {id: '1', title: '프로그램 이름', subtitle: '00양조장 (00구 00시)'},
  {id: '2', title: '프로그램 이름', subtitle: '00양조장 (00구 00시)'},
  {id: '3', title: '프로그램 이름', subtitle: '00양조장 (00구 00시)'},
  {id: '4', title: '프로그램 이름', subtitle: '00양조장 (00구 00시)'},
];

const BreweryList = ({route, navigation}) => {
  const {regionName} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: regionName,
    });
  }, [navigation, regionName]);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>총 {breweries.length}개</Text>
      <FlatList
        data={breweries}
        renderItem={({item}) => (
          <BreweryItem title={item.title} subtitle={item.subtitle} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.breweryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  countText: {
    fontSize: 12,
    color: '#666',
    marginVertical: 8,
    marginHorizontal: 8,
    textAlign: 'left',
  },
  breweryList: {
    justifyContent: 'space-between',
  },
});

export default BreweryList;
