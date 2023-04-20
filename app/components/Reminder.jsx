import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {primaryColor} from '../constants/colors';

const Reminder = ({main, second}) => {
  return (
    <>
      <Text style={styles.wrapper}>
        <Text>{main}</Text>
        <Text style={{color: primaryColor}}> {second}</Text>
      </Text>
    </>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 12,
    fontWeight: '400',
  },
});
