import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PassIcon = props => {
  return (
    <>
      <Svg
        width={12}
        height={14}
        style={{margin: 16}}
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M6.00008 0.333332C4.16208 0.333332 2.66675 1.82867 2.66675 3.66667V5H2.00008C1.26475 5 0.666748 5.598 0.666748 6.33333V12.3333C0.666748 13.0687 1.26475 13.6667 2.00008 13.6667H10.0001C10.7354 13.6667 11.3334 13.0687 11.3334 12.3333V6.33333C11.3334 5.598 10.7354 5 10.0001 5H9.33342V3.66667C9.33342 1.82867 7.83808 0.333332 6.00008 0.333332ZM4.00008 3.66667C4.00008 2.564 4.89741 1.66667 6.00008 1.66667C7.10275 1.66667 8.00008 2.564 8.00008 3.66667V5H4.00008V3.66667ZM10.0014 12.3333H6.66675V10.8147C7.06342 10.5833 7.33342 10.158 7.33342 9.66667C7.33342 8.93133 6.73541 8.33333 6.00008 8.33333C5.26475 8.33333 4.66675 8.93133 4.66675 9.66667C4.66675 10.1573 4.93675 10.5833 5.33342 10.8147V12.3333H2.00008V6.33333H10.0001L10.0014 12.3333Z"
          fill="#93989B"
        />
      </Svg>
    </>
  );
};

export default PassIcon;

const styles = StyleSheet.create({});
