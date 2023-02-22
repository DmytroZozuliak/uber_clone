import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MapStackParamList, RootStackParamList } from '../interfaces/baseInterfaces'

export const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList & MapStackParamList>>()
