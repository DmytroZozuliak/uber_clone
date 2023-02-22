import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useTypedDispatch } from '../hooks/redux'
import { useTypedNavigation } from '../hooks/navigation'
import { navActions } from '../store/reducers/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'
import NavFavorites from './NavFavorites'

const NavigateCard = () => {
  const dispatch = useTypedDispatch()
  const navigation = useTypedNavigation()

  return (
    <SafeAreaView className='bg-white flex-1'>
      <Text className='text-center py-5 text-xl font-sem'>Have a nice day!</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                backgroundColor: "white", paddingTop: 20
              },
              textInput: { fontSize: 18, borderRadius: 0, backgroundColor: "#DDDDDF" },
              textInputContainer: {
                paddingBottom: 0,
                paddingHorizontal: 20
              }
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            placeholder='Where to...'

            onPress={(data, details = null) => {
              if (!details?.geometry.location) {
                return
              }
              dispatch(navActions.setDestination({
                location: details.geometry.location,
                description: data.description
              }))
              navigation.navigate("RideOptionsCard")
            }}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          />
        </View>

        <NavFavorites options="destination" />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard
