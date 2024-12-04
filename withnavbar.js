import React from 'react';
import { View } from 'react-native';
import Navbar from './navbar'; // Adjust the path as needed

const withNavbar = (Component) => {
  return (props) => (
    <View style={{ flex: 1 }}>
      <Navbar />
      <Component {...props} />
    </View>
  );
};

export default withNavbar;
