import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const regions = [
  {name: '서울/경기도', image: 'https://via.placeholder.com/60/E6E6FA'},
  {name: '강원도', image: 'https://via.placeholder.com/60/FFB6C1'},
  {name: '충청북도', image: 'https://via.placeholder.com/60/FFFACD'},
  {name: '충청남도', image: 'https://via.placeholder.com/60/98FB98'},
  {name: '경상북도', image: 'https://via.placeholder.com/60/B0E0E6'},
  {name: '경상남도', image: 'https://via.placeholder.com/60/AFEEEE'},
  {name: '전북도', image: 'https://via.placeholder.com/60/D3D3D3'},
  {name: '전라남도', image: 'https://via.placeholder.com/60/FFB6C1'},
];

const RegionList = () => {
  return (
    <View style={styles.container}>
      {regions.map((region, index) => (
        <View key={index} style={styles.regionItem}>
          <Image source={{uri: region.image}} style={styles.regionImage} />
          <Text style={styles.regionText}>{region.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 30,
    shadowColor: '#000', // 그림자 색상
    shadowOffset: {width: 0, height: 2}, // 그림자 위치
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 3.0, // 그림자 반경
    elevation: 5, // Android의 그림자 효과
  },
  regionItem: {
    width: '22%', // 4개씩 정렬하기 위해 설정
    marginBottom: 16,
    alignItems: 'center',
  },
  regionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  regionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default RegionList;
