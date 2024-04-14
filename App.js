import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Redux
import { Provider } from 'react-redux';
import { store } from './store';
// Screens
import HomeScreen from './screens/HomeSсreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import ProfileScreen from './screens/ProfileScreen';
import AllergyScreen from './screens/AllergyScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen name='Restaurants' component={RestaurantsScreen} />
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
          <Stack.Screen
            name='Allergy'
            component={AllergyScreen}
            options={{
              presentation: 'modal',
              headerShown: false
            }}
          />
          <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}