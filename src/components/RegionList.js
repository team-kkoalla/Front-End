import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const regions = [
  {name: '서울/경기도', image: 'https://via.placeholder.com/60/E6E6FA'},
  {name: '강원도', image: 'https://via.placeholder.com/60/FFB6C1'},
  {name: '충청북도', image: 'https://via.placeholder.com/60/FFFACD'},
  {name: '충청남도', image: 'https://via.placeholder.com/60/98FB98'},
  {name: '경상북도', image: 'https://via.placeholder.com/60/B0E0E6'},
  {name: '경상남도', image: 'https://via.placeholder.com/60/AFEEEE'},
  {name: '전라북도', image: 'https://via.placeholder.com/60/D3D3D3'},
  {name: '전라남도', image: 'https://via.placeholder.com/60/FFB6C1'},
];

const RegionList = () => {
  const navigation = useNavigation();

  const handleRegionPress = (regionName) => {
    navigation.navigate('BreweryList', {regionName});
  };

  return (
    <View style={styles.container}>
      {regions.map((region, index) => (
        <TouchableOpacity
          key={index}
          style={styles.regionItem}
          onPress={() => handleRegionPress(region.name)}>
          <Image source={{uri: region.image}} style={styles.regionImage} />
          <Text style={styles.regionText}>{region.name}</Text>
        </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.0,
    elevation: 5,
  },
  regionItem: {
    width: '22%',
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
