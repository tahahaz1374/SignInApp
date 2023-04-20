import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyles from '../styles/Styles';
import {primaryColor} from '../constants/colors';

const WelcomeText = () => {
  return (
    <View style={defaultStyles.rowContainer}>
      <Text style={styles.textWrapper}>
        <Text>Welcome To</Text>
        <Text style={{color: primaryColor, marginLeft: 10}}> PathoPlus To</Text>
      </Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  textWrapper: {
    // fontFamily: 'Roboto',
    fontSize: 16,
  },
});
