import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { SafeAreaView, ScrollView, Text, View,StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

import places from '.././data/places.json';

export default class SearchScreen extends React.Component {
  render() {
    return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.MainContainer}>
              <MapView
                style={styles.mapStyle}
                showsUserLocation={true}
                zoomEnabled={true}
                zoomControlEnabled={true}
                initialRegion={{
                  latitude: places.data[0].coordinates.latitude,
                  longitude: places.data[0].coordinates.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
            {
              places.data.map(marker => (
                <MapView.Marker 
                key={marker.id}
                  coordinate={marker.coordinates}
                  title={marker.title}
              />
            ))}
              </MapView>
          </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});