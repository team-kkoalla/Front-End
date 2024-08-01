import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const BadgeDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} />
      </View>
      <Text style={styles.title}>
        다양한 미션을 완수해 뱃지를 수집해보세요!
      </Text>
      <Text style={styles.description}>
        꼬알이와 함께 국내 양조장 여행을 떠나며 뱃지를 수집할수록 꼬알이는 더욱
        친근하고 귀여운 모습으로 변한답니다.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: '#808080',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default BadgeDetail;
