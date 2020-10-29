import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map} 
          initialRegion={{
            latitude: -5.0679909,
            longitude: -42.7676713,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        >
          <Marker 
            icon={mapMarker}
            coordinate={{
              latitude: -5.0679909,
              longitude: -42.7676713,
            }}
          >
            <Callout>
              <Text>Happy House</Text>
            </Callout>
          </Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
