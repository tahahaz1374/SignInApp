import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Page from '../components/Page';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Input from '../components/Input';
import PrimaryBtn from '../components/PrimaryBtn';
import Reminder from '../components/Reminder';

const SignUp = () => {
  return (
    <Page>
      <Hero />
      <Title title={'Sign Up'} desc={'Please Sign UP to enjoy our services.'} />
      <Input placeholder={'Your Full Name'} />
      <Input placeholder={'Phone number'} />
      <Input placeholder={'Email Address'} />
      <Input placeholder={'Hospital/clinic name'} />
      <Input placeholder={'Address'} />
      <Input placeholder={'City'} />
      <Input placeholder={'Enter Password'} hasRightIcon />
      <Input placeholder={'Confirm Password'} hasRightIcon />
      <PrimaryBtn title={'Login'} />
      <Reminder main={'Already Have an account?'} second={' Signin'} />
    </Page>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
