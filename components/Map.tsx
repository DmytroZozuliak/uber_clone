import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useTypedSelector } from '../hooks/redux'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'


const Map = () => {
  const mapRef = useRef<MapView | null>(null)
  const origin = useTypedSelector(state => state.nav.origin)
  const destination = useTypedSelector(state => state.nav.destination)

  useEffect(() => {
    if (!origin || !destination || !mapRef.current) return
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, left: 50, bottom: 50, right: 50 }
    })
  }, [origin, destination])


  return (
    <MapView
      ref={mapRef}
      className='flex-1'
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin?.location.lat ?? 50.44838,
        longitude: origin?.location.lng ?? 30.63155,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && <Marker
        coordinate={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />}

      {destination?.location && <Marker
        coordinate={{
          latitude: destination?.location.lat,
          longitude: destination?.location.lng,
        }}
        title="Destination"
        description={destination.description}
        identifier="destination"
      />}
    </MapView>

  )
}

export default Map
