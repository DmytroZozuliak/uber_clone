import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Point } from 'react-native-google-places-autocomplete';
// import { Icon } from '@rneui/base';
import { Icon } from '@rneui/themed';
import { useTypedDispatch } from '../hooks/redux';
import { navActions } from '../store/reducers/navSlice';
import { useTypedNavigation } from '../hooks/navigation';

interface FavoritePlace {
  id: string
  description: string
  icon: string
  location: Point
  destination: string
}

const favorites: FavoritePlace[] = [
  {
    id: "1",
    description: "Home",
    icon: "home",
    location: { lat: 50.44838, lng: 30.63155 },
    destination: "вуд.Івана Сергієнка 15, Київ"
  },
  {
    id: "2",
    description: "Isla coffee",
    icon: "cafe",
    location: { lat: 50.445518, lng: 30.621611 },
    destination: "вул.Будівельників 8, Київ"
  },
  {
    id: "3",
    description: "Central bus station",
    icon: "cafe",
    location: { lat: 50.406358, lng: 30.519482 },
    destination: "пр-т.Науки 1, Київ"
  },
  {
    id: "4",
    description: "Central bus station",
    icon: "cafe",
    location: { lat: 50.406358, lng: 30.519482 },
    destination: "пр-т.Науки 1, Київ"
  },


]

interface NavFavoritesProps {
  options: 'origin' | 'destination'
}

const NavFavorites = ({ options }: NavFavoritesProps) => {
  const dispatch = useTypedDispatch()
  const navigation = useTypedNavigation()

  return (
    <FlatList
      data={favorites}
      // horizontal
      showsVerticalScrollIndicator={false}
      // showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (<View
        className='bg-gray-200' style={{ height: 0.5 }} />)}
      renderItem={({ item }) => (
        <TouchableOpacity className='flex-row items-center p-5'
          onPress={() => {
            if (options === "origin") {
              dispatch(navActions.setOrigin({
                description: item.description,
                location: item.location
              }))

              navigation.navigate('MapScreen')
            } else {
              dispatch(navActions.setDestination({
                description: item.description,
                location: item.location
              }))
              navigation.navigate("RideOptionsCard")

            }

          }}
        >
          <View className='mr-4 rounded-full bg-gray-300 p-3'>
            <Icon
              type='ionicon'
              size={18}
              name={item.icon}
              color="white"
            />
          </View>
          <View>
            <Text className='font-semibold text-lg'>
              {item.description}
            </Text>
            <Text className='text-gray-500'>
              {item.destination}
            </Text>
          </View>
        </TouchableOpacity>
      )}

    />
  )
}

export default NavFavorites
