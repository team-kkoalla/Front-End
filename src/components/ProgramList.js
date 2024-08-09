import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const programs = [
  {
    id: 1,
    name: '와와 양조장',
    status: '마감임박',
    region: '00구 00동',
    applicants: 30,
    capacity: 40,
    timePassed: false,
  },
  {
    id: 2,
    name: '쏠쏠 양조장',
    status: '모집중',
    region: '00구 00동',
    applicants: 10,
    capacity: 40,
    timePassed: false,
  },
  {
    id: 3,
    name: '와와 양조장',
    status: '마감임박',
    region: '00구 00동',
    applicants: 30,
    capacity: 40,
    timePassed: false,
  },
  {
    id: 4,
    name: '와와 양조장',
    status: '마감임박',
    region: '00구 00동',
    applicants: 30,
    capacity: 40,
    timePassed: false,
  },
  {
    id: 5,
    name: '와와 양조장',
    status: '마감임박',
    region: '00구 00동',
    applicants: 30,
    capacity: 40,
    timePassed: false,
  },
];

const getStatusBadge = (applicants, capacity, timePassed) => {
  if (timePassed || applicants >= capacity) {
    return {label: '모집마감', style: styles.closedBadge};
  } else if (applicants >= capacity / 2) {
    return {label: '마감임박', style: styles.warningBadge};
  } else {
    return {label: '모집중', style: styles.openBadge};
  }
};

const ProgramList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>모집중인 프로그램</Text>
      {programs.map(item => {
        const badge = getStatusBadge(
          item.applicants,
          item.capacity,
          item.timePassed,
        );
        return (
          <View key={item.id} style={styles.programItem}>
            <Image
              style={styles.programImage}
              source={{uri: 'https://via.placeholder.com/100'}}
            />
            <View style={styles.programDetails}>
              <Text style={styles.programName}>{item.name}</Text>
              <Text style={styles.programRegion}>{item.region}</Text>
            </View>
            <View style={styles.statusRow}>
              <View style={[styles.statusBadge, badge.style]}>
                <Text style={styles.badgeText}>{badge.label}</Text>
              </View>
              <Text style={styles.applicantText}>지원자/신청자</Text>
            </View>
          </View>
        );
      })}
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
    marginBottom: 16,
  },
  programItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  programImage: {
    width: 130,
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
  statusRow: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 5,
    alignItems: 'flex-end',
  },
  applicantText: {
    fontSize: 12,
    color: '#999',
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    minWidth: 60,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  openBadge: {
    backgroundColor: '#007BFF',
  },
  warningBadge: {
    backgroundColor: '#FFA500',
  },
  closedBadge: {
    backgroundColor: '#FF0000',
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default ProgramList;
