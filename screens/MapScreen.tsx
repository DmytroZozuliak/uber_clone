import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { useTypedDispatch } from '../hooks/redux'
import { useTypedNavigation } from '../hooks/navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MapStackParamList } from '../interfaces/baseInterfaces'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const Stack = createNativeStackNavigator<MapStackParamList>();

const MapScreen = () => {
  const navigation = useTypedNavigation()


  return (
    <View>
      <View className='h-1/2'>
        <Map />
      </View>

      <View className='h-1/2'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
