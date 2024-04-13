import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeSсreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen 
            name='Basket' 
            component={BasketScreen} 
            options={{ 
              presentation: 'modal', 
              headerShown: false 
            }}
          />
          <Stack.Screen 
            name='Preparing' 
            component={PreparingOrderScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name='Delivery' 
            component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false
            }} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}