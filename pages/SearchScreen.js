import React from 'react';
import MapView from 'react-native-maps';
import {View, StyleSheet} from 'react-native';

import places from '.././dummy-json-data/places.json';

import mapStyles from '.././styles/map/styles.json';

export default class SearchScreen extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.MainContainer}>
          <MapView
            style={styles.mapStyle}
            customMapStyle={mapStyles.night_mode}
            showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: places.data[0].coordinates.latitude,
              longitude: places.data[0].coordinates.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {places.data.map(marker => (
              <MapView.Marker
                key={marker.id}
                anchor={{x: 0, y: 1}} // TODO position the anchor after the icons have been enhanced
                coordinate={marker.coordinates}
                title={marker.title}
                image={require('./../icons/map_icons/sports/basketball.png')}
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
