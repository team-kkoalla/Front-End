import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import BreweryItem from '../components/common/BreweryItem';

const data = [
  {id: '1', title: '양조장 프로그램 이름', subtitle: '양조장 이름'},
  {
    id: '2',
    title: '제주도 감귤을 이용한 새콤달콤 막걸리 만들기 체험',
    subtitle: '송지혜 전통 양조장',
  },
  {id: '3', title: '양조장 프로그램 이름', subtitle: '양조장 이름'},
  {id: '4', title: '양조장 프로그램 이름', subtitle: '양조장 이름'},
];

const Like = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.listContainer}>
      <View style={styles.gridContainer}>
        {data.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <BreweryItem title={item.title} subtitle={item.subtitle} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%', // 각 아이템의 너비를 50% 미만으로 설정하여 두 개의 아이템이 한 줄에 배치되도록 함
    marginBottom: 15,
  },
});

export default Like;
