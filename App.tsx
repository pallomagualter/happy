import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
        <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: -5.0811659,
          longitude: -42.7866835,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        />
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
