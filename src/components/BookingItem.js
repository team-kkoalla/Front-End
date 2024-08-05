import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomButton from './common/CustomButton';

const BookingItem = ({
  item,
  showButton = false,
  buttonLabel = '취소/환불',
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image
          source={{uri: 'https://via.placeholder.com/100'}}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.programName}>{item.programName}</Text>
          <Text style={styles.programDetails}>{item.programDetails}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>총 결제금액</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        {item.status && (
          <Text style={[styles.status, {color: item.statusColor}]}>
            {item.status}
          </Text>
        )}
        {showButton && (
          <CustomButton
            label={buttonLabel}
            onPress={onButtonPress}
            type="outline"
            size="medium"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 16,
    marginBottom: 25,
  },
  programName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  programDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  status: {
    fontSize: 14,
  },
});

export default BookingItem;
