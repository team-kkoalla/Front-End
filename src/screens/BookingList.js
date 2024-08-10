import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BookingItem from '../components/common/BookingItem';
import { useNavigation } from "@react-navigation/native";

const BookingList = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      programName: '양조장 프로그램 이름',
      programDetails:
        '00월00일 00시, 0명\n양조장 이름\n양조장 위치 양조장 위치 양조장 위치',
      price: '0,000원',
      status: '예약(체험)완료',
    },
    {
      id: '2',
      programName: '양조장 프로그램 이름',
      programDetails:
        '00월00일 00시, 0명\n양조장 이름\n양조장 위치 양조장 위치 양조장 위치',
      price: '0,000원',
      status: '모집중',
    },
    // 추가 데이터...
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <BookingItem
            item={{
              programName: '양조장 프로그램 이름',
              programDetails:
                '00월00일 00시, 0명\n양조장 이름\n양조장 위치 양조장 위치 양조장 위치',
              price: '0,000원',
              status: '모집중',
              statusColor: 'blue',
            }}
            showButton={true}
            buttonLabel="취소/환불"
            onButtonPress={() => navigation.navigate('BookingCancel')}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BookingList;
