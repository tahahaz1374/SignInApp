import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import EyeIcon from '../assets/icons/EyeIcon';

const Input = ({children, placeholder, hasRightIcon}) => {
  return (
    <View style={[styles.wrapper]}>
      {children}
      <TextInput
        style={[styles.input, {paddingLeft: !hasRightIcon ? 20 : 20}]}
        placeholder={placeholder}
      />
      {hasRightIcon && <EyeIcon />}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    paddingRight: 16,
    // backgroundColor: 'red',
  },
});
