import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Page from '../components/Page';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Input from '../components/Input';
import PassIcon from '../assets/icons/PassIcon';
import PrimaryBtn from '../components/PrimaryBtn';
import Reminder from '../components/Reminder';

const Otp = () => {
  return (
    <Page>
      <Hero />
      <Title
        title={'OTP verification'}
        desc={'OTP has sent to your registered email address'}
      />
      <Input placeholder={'Enter OTP'}>
        <PassIcon />
      </Input>
      <PrimaryBtn title={'Verify'} />
      <Reminder main={'Didn’t received?'} second={'Resend OTP'} />
    </Page>
  );
};

export default Otp;

const styles = StyleSheet.create({});
