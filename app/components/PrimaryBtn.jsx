import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {primaryBGColor} from '../constants/colors';

const PrimaryBtn = ({title}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: primaryBGColor,
    borderRadius: 10,
    paddingVertical: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
