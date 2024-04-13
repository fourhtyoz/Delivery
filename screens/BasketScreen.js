import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity';


const BasketScreen = () => {
    const [groupedItems, setGroupedItems] = useState([])
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const total = useSelector(selectBasketTotal)
    const dispatch = useDispatch()

    useMemo(() => {
        const grouped = items.reduce((results, item) => {
          (results[item.id] = results[item.id] || []).push(item);
          return results;
        }, {});
        setGroupedItems(grouped);
    }, [items]);


    useEffect(() => {
        if (items.length  === 0) {
            navigation.goBack()
            return
        }
        return
    }, [groupedItems])

    if (!items.length) return null
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                        <Text className='text-center text-gray-400'>{restaurant.address}</Text>
                    </View>

                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-100 top-3 right-5 absolute'
                    >
                        <XCircleIcon size={50} color='#00CCBB' />
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>  
                    <Image 
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                        source={require('../assets/placeholder.avif')}
                    />
                    <Text className='flex-1'>Delivery in 50-75 min.</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-200'>
                    {Object.entries(groupedItems).map(([key, i]) => (
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                            <Text className='text-[#00CCBB]' >{i.length} x</Text>
                            <Image 
                                className='h-12 w-12 rounded-full'
                                source={{ uri: urlFor(i[0]?.image).url() }} 
                            />
                            <Text className='flex-1'>{i[0]?.name}</Text>

                            <Text className='text-gray-600'>
                                ${i.length * i[0].price}.00
                            </Text>

                            <TouchableOpacity>
                                <Text 
                                    className='text-[#00CCBB]'
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className='p-5 bg-white space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>
                            Subtotal
                        </Text>
                        <Text className='text-gray-400'>
                            ${total}.00
                        </Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>
                            Delivery Fee
                        </Text>
                        <Text className='text-gray-400'>
                            $5.99
                        </Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text>Order Total</Text>
                        <Text className='font-extrabold'>
                            ${total + 5}.99
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Preparing')} className='rounded-lg bg-[#00CCBB] p-4'>
                        <Text className='text-center text-white text-lg font-bold'>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen