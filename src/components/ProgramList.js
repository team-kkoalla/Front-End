import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const programs = [
  { id: 1, name: "충영 양조장", status: "마감임박", region: "00구 00동" },
  { id: 2, name: "맛좋은 양조장", status: "신청중", region: "00구 00동" },
];

const ProgramList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>모집중인 프로그램</Text>
      {programs.map(program => (
        <View key={program.id} style={styles.programItem}>
          <Image style={styles.programImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View style={styles.programDetails}>
            <Text style={styles.programName}>{program.name}</Text>
            <Text style={styles.programRegion}>{program.region}</Text>
            <Text style={[styles.programStatus, program.status === '마감임박' ? styles.redText : styles.blueText]}>
              {program.status}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  programItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  programImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginRight: 16,
  },
  programDetails: {
    flex: 1,
  },
  programName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  programRegion: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  programStatus: {
    fontSize: 14,
    marginTop: 4,
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue',
  },
});

export default ProgramList;
