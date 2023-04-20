import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './Logo';
import WelcomeText from './WelcomeText';

const Hero = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Logo />
      <WelcomeText />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({});
