import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { useTypedDispatch } from '../hooks/redux'
import { useTypedNavigation } from '../hooks/navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MapStackParamList } from '../interfaces/baseInterfaces'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from '@rneui/themed'

const Stack = createNativeStackNavigator<MapStackParamList>();

const MapScreen = () => {
  const navigation = useTypedNavigation()


  return (
    <View>
      <TouchableOpacity className='bg-gray-100 absolute z-50 top-16 left-8 p-3 rounded-full shadow-lg'
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View className='h-1/2'>
        <Map />
      </View>

      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
