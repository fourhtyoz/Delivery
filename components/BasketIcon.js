import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { selectBasketTotal } from '../features/basketSlice';


const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const total = useSelector(selectBasketTotal)
    const navigation = useNavigation()
  return (
    <View className='absolute bottom-10 w-full z-50'>  
        <TouchableOpacity 
            onPress={() => navigation.navigate('Basket')}
            className='bg-[#00CCBB] mx-5 rounded-lg flex-row items-center justify-between space-x-1 p-4'
        >
            <Text className='text-lg text-white font-extrabold bg-[#01A296] py-1 px-2'>{items.length}</Text>
            <Text className='text-lg text-white font-extrabold text-center '>View Bakset</Text>
            <Text className='text-lg text-white font-extrabold'>${total}.00</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon