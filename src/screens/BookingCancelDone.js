import React from 'react';
import CancelDetail from '../components/CancelDetail';
import { ScrollView, StyleSheet } from "react-native";

const BookingCancelDone = () => {
  return (
    <ScrollView style={styles.container}>
      <CancelDetail />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    backgroundColor: '#fff',
    flex: 1,
  },
});


export default BookingCancelDone;
