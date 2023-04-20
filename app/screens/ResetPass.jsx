import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Page from '../components/Page';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Input from '../components/Input';
import ProfileIcon from '../assets/icons/ProfileIcon';
import PassIcon from '../assets/icons/PassIcon';
import PrimaryBtn from '../components/PrimaryBtn';
import Reminder from '../components/Reminder';

const ResetPass = () => {
  return (
    <Page>
      <Hero />
      <Title title={'Sign In'} desc={'Please Sign in to enjoy our services.'} />
      <Input placeholder={'Enter New Password'} hasRightIcon={true}>
        <PassIcon />
      </Input>
      <Input placeholder={'Confirm Password'} hasRightIcon={true}>
        <PassIcon />
      </Input>
      <PrimaryBtn title={'Login'} />
      <Reminder />
    </Page>
  );
};

export default ResetPass;

const styles = StyleSheet.create({});
