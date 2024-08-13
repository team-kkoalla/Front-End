import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './common/CustomButton';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const CancelDetail = () => {
  const navigation = useNavigation();
  const handleConfirm = () => {
    navigation.navigate('BookingList'); // "확인" 버튼을 누르면 BookingList로 이동
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="close-circle-outline" size={100} />
      </View>
      <Text style={styles.title}>취소/환불 요청이 {'\n'} 완료되었습니다.</Text>
      <Text style={styles.description}>
        - 약관입니다{'\n'}- 님 환불이 안될수도 있음{'\n'}- 뭐 될수도 있고{'\n'}-
        확인후에 연락드림
      </Text>
      <CustomButton
        label="확인"
        onPress={handleConfirm}
        type="outline"
        size="medium"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    marginBottom: 30,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default CancelDetail;
