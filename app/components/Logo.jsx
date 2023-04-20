import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return <View style={styles.container}></View>;
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 3,
    backgroundColor: '#B82C3A3B',
    marginBottom: 14,
  },
});
