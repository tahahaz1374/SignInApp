import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

const Page = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        style={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 62,
    paddingHorizontal: 24,
    // backgroundColor: 'red',
  },
});
