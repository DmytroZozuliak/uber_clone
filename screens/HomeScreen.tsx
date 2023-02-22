import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavOptions from '../components/NavOptions'
import { useTypedDispatch } from '../hooks/redux';
import { navActions } from '../store/reducers/navSlice';
import NavFavorites from '../components/NavFavorites';

const data = Array.from({ length: 30 }, (_, ind) => ind)

const HomeScreen = () => {
  const dispatch = useTypedDispatch()

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View className="p-5" >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }} />
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where from?'

          onPress={(data, details = null) => {
            if (!details?.geometry.location) {
              return
            }
            dispatch(navActions.setOrigin({
              location: details?.geometry.location,
              description: data.description
            }))
            dispatch(navActions.setDestination(null))
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <NavOptions />
      </View >
      {/* <View className='flex-shrink p-5'>
        <FlatList
          data={data} keyExtractor={item => item.toString()}
          renderItem={({ item }) => (<Text>{item}</Text>)}
        />
      </View> */}

      <NavFavorites options='origin' />
    </SafeAreaView >
  )
}

export default HomeScreen
