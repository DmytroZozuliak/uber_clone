import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { RootStackParamList } from '../interfaces/baseInterfaces'
import { useTypedNavigation } from '../hooks/navigation'
import { useTypedSelector } from '../hooks/redux'

interface Route {
  id: string;
  title: string;
  image: string;
  screen: keyof RootStackParamList;
}

const data: Route[] = [
  {
    id: "1",
    title: 'Get a ride',
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"

  },
  {
    id: "2",
    title: 'Order food',
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
  }
]


const NavOptions = () => {
  const navigation = useTypedNavigation()
  const origin = useTypedSelector(state => state.nav.origin)

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className='p-2 pl-6 pb-6 pt-4 bg-gray-200 m-2 w-40'
          disabled={!origin}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View className={`${!origin && "opacity-20"}`}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
            <View className='p-2 bg-black rounded-full w-10 mt-4'>
              <Icon
                type='antdesign'
                name='arrowright'
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
