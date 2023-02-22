import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import { RootStackParamList } from './interfaces/baseInterfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>

      {/* </SafeAreaProvider> */}
    </Provider>
  );
}
