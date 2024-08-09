import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

const Unregister = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUnregister = () => {
    // 탈퇴하기 버튼 눌렀을 때의 로직 처리
    alert('탈퇴 처리되었습니다.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>정말 탈퇴하시겠어요?</Text>
      <Text style={styles.subtitle}>꼬알이가 많이 그리워할거에요</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          ⚠️ 계정이 삭제된 이후에는 복구가 불가능해요!
        </Text>
        <Text style={styles.infoText}>
          ⚠️ 탈퇴하시더라도 기존 체험 신청은 취소되지 않아요. 체험 신청 취소를
          원하신다면 ‘예약 현황 관리’에서 진행해 주세요!
        </Text>
        <Text style={styles.infoText}>
          ⚠️ 탈퇴 후에는 작성하신 후기를 수정 혹은 삭제하실 수 없어요. 탈퇴 신청
          전에 꼭 확인해 주세요!
        </Text>
      </View>

      <CheckBox
        title="회원탈퇴 유의사항을 확인하였으며 이에 동의합니다."
        checked={isChecked}
        onPress={handleCheckboxChange}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
      />

      <TouchableOpacity
        style={[
          styles.button,
          isChecked ? styles.buttonEnabled : styles.buttonDisabled,
        ]}
        onPress={handleUnregister}
        disabled={!isChecked}>
        <Text style={styles.buttonText}>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#000',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Unregister;
