import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../components/common/CustomInput';
import CustomButton from '../components/common/CustomButton';
import BookingItem from '../components/common/BookingItem';
import CustomPickerModal from '../components/common/CustomPickerModal';
import {useNavigation} from '@react-navigation/native';

const banks = [
  {label: '신한은행', value: 'shinhan'},
  {label: '국민은행', value: 'kookmin'},
  {label: '우리은행', value: 'woori'},
  {label: '하나은행', value: 'hana'},
  {label: 'SC제일은행', value: 'jeil'},
  {label: '케이뱅크', value: 'kbank'},
  {label: '카카오뱅크', value: 'kakao'},
  {label: '토스뱅크', value: 'toss'},
];

const BookingCancel = () => {
  const navigation = useNavigation();
  const [selectedBank, setSelectedBank] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelCancel = () => {
    navigation.navigate('BookingCancelDone');
  };

  // 모달 열기
  const openModal = () => setIsModalVisible(true);

  // 모달 닫기
  const closeModal = () => setIsModalVisible(false);

  // 은행 선택
  const selectBank = item => {
    setSelectedBank(item.label);
    closeModal();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.programContainer}>
        <BookingItem
          item={{
            programName: '양조장 프로그램 이름',
            programDetails: '00월00일 00시, 0명',
            price: '0,000원',
          }}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>환불 계좌 정보 작성</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>환불 계좌 은행</Text>
          <TouchableOpacity style={styles.pickerContainer} onPress={openModal}>
            <Text style={styles.selectedBankText}>
              {selectedBank || '은행을 선택해주세요'}
            </Text>
          </TouchableOpacity>

          <CustomInput
            label="환불 계좌 번호"
            placeholder="환불 계좌 번호를 입력해주세요"
          />
          <CustomInput
            label="환불 계좌 예금주"
            placeholder="예금주명을 입력해주세요"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="취소/환불 요청"
            onPress={handelCancel}
            type="outline"
            size="medium"
          />
        </View>
      </View>

      <CustomPickerModal
        visible={isModalVisible}
        onClose={closeModal}
        items={banks}
        onSelect={selectBank}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  programContainer: {
    marginBottom: -20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -20,
    marginBottom: 15,
  },
  sectionContainer: {
    padding: 20,
    backgroundColor: '#fff',
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
    borderRadius: 10,
    marginBottom: 20,
    padding: 12,
  },
  selectedBankText: {
    fontSize: 14,
    color: '#000',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default BookingCancel;
