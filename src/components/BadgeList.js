import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const badgeData = [
  {id: '1', name: '뱃지 이름', description: '양조장 예약 00번 하기'},
  {id: '2', name: '뱃지 이름', description: '모모해서 뱃지 얻기'},
  {id: '3', name: '뱃지 이름', description: '모모해서 뱃지 얻기'},
  {id: '4', name: '뱃지 이름', description: '모모해서 뱃지 얻기'},
];

const BadgeItem = ({name, description}) => (
  <View style={styles.itemContainer}>
    <View style={styles.iconContainer}>
      <Ionicons name="lock-closed-outline" size={30} color="#bbb" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.badgeName}>{name}</Text>
      <Text style={styles.badgeDescription}>{description}</Text>
    </View>
  </View>
);

const BadgeList = () => {
  return (
    <FlatList
      data={badgeData}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <BadgeItem name={item.name} description={item.description} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  badgeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default BadgeList;
