import React from 'react';
import {Text, View, FlatList} from 'react-native';
import DummyJsonData from '../dummy-json-data/DummyJsonData.js';

export default class ProfileScreen extends DummyJsonData {
  constructor(props) {
    super(props);
    this.callbackFunction(
      require('../dummy-json-data/profiles.json').data[
        new Date().getMilliseconds() % 4//maxIndex
      ],
    );
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile</Text>
        <Text>name: {this.state.data.name}</Text>
        <Text>id: {this.state.data.id}</Text>
        <FlatList
          data={this.state.data.sports}
          renderItem={({item}) => <Text>sport: {item}</Text>}
        />
      </View>
    );
  }
}
