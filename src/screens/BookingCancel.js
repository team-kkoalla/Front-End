import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CustomInput from '../components/common/CustomInput';
import CustomButton from '../components/common/CustomButton';
import BookingItem from '../components/common/BookingItem';

const BookingCancel = () => {
  const [selectedBank, setSelectedBank] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.programContainer}>
        {/* 재활용한 BookingItem 컴포넌트 */}
        <BookingItem
          item={{
            programName: '양조장 프로그램 이름',
            programDetails: '00월00일 00시, 0명',
            price: '0,000원',
          }}
        />
      </View>

      <Text style={styles.sectionTitle}>환불 계좌 정보 작성</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>환불 계좌 은행</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedBank}
            onValueChange={itemValue => setSelectedBank(itemValue)}>
            <Picker.Item label="은행을 선택해주세요" value="" />
            <Picker.Item label="신한은행" value="shinhan" />
            <Picker.Item label="국민은행" value="kookmin" />
            <Picker.Item label="우리은행" value="woori" />
            <Picker.Item label="하나은행" value="hana" />
          </Picker>
        </View>

        <CustomInput
          label="환불 계좌 번호"
          placeholder="환불 계좌 번호를 입력해주세요"
        />
        <CustomInput
          label="환불 계좌 예금주"
          placeholder="예금주명을 입력해주세요"
        />
      </View>

      <CustomButton
        label="취소/환불 요청"
        onPress={() => alert('취소/환불 요청이 제출되었습니다.')}
        type="outline"
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  programContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default BookingCancel;
