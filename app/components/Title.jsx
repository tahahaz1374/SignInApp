import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({title, desc}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 62,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2B2B2B',
  },
});
