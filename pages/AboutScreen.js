/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}>about who?</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
