//This is an example code for Bottom Navigation//
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import DummyJsonData from '../dummy-json-data/DummyJsonData.js';

export default class TeamScreen extends DummyJsonData {
  constructor(props) {
    super(props);
    this.callbackFunction(require('../dummy-json-data/profiles.json').data);
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}