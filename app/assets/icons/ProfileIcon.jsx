import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = props => {
  return (
    <>
      <Svg
        width={12}
        height={12}
        style={{margin: 16}}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M1 10.544C2.29766 9.2196 4.05945 8.40565 6 8.40565C7.94055 8.40565 9.70234 9.2196 11 10.544M8.5 3.86164C8.5 5.19025 7.38071 6.26729 6 6.26729C4.61929 6.26729 3.5 5.19025 3.5 3.86164C3.5 2.53304 4.61929 1.45599 6 1.45599C7.38071 1.45599 8.5 2.53304 8.5 3.86164Z"
          stroke="#93989B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({});
