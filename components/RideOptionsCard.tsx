import { View, Text, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import { useTypedNavigation } from '../hooks/navigation'



interface CarVariant {
  id: string
  title: string
  multiplier: number
  image: string
}

const carsAvailable: CarVariant[] = [
  {
    id: "Uber-X",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
  ,
  {
    id: "Uber-LUX1",
    title: "Uber LUX1",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
  ,
  {
    id: "Uber-LUX2",
    title: "Uber LUX2",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const RideOptionsCard = () => {
  const navigation = useTypedNavigation()
  const [selectedCar, setSelectedCar] = useState<CarVariant | null>(null)

  return (
    <SafeAreaView className='bg-white flex-1'>
      <View>
        <TouchableOpacity className='absolute z-20 top-3 left-5 p-3 rounded-full'
          onPress={() => navigation.goBack()}
        >
          <Icon
            type='fontawesome'
            name="chevron-left"
          />
        </TouchableOpacity>
        <Text className='text-center py-5 text-xl'>Select a Ride</Text>
      </View>
      <FlatList
        data={carsAvailable}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className={`flex-row items-center justify-between px-10 ${selectedCar?.id === item.id && "bg-gray-200"}`}
            onPress={() => setSelectedCar(item)}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View className='-ml-6'>
              <Text className='text-xl font-semibold'>{item.title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text className='text-xl'>200 ₴</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity disabled={!selectedCar} className={`bg-black py-3 m-3 ${!selectedCar && "bg-gray-300"}`}>
        <Text className='text-center text-white text-xl'>Choose {selectedCar?.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RideOptionsCard
