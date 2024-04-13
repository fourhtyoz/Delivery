import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { 
    ArrowLeftIcon, 
    StarIcon, 
    ChevronRightIcon, 
    MapPinIcon, 
    QuestionMarkCircleIcon 
} from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
    const { 
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat
        }
    } = useRoute()

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat
        }))
    }, [])

    return (
        <>
        <BasketIcon />
        <ScrollView>
            <View className="relative">
                <Image 
                    className="w-full h-56 bg-gray-300 p-4"
                    source={{
                        uri: urlFor(imgUrl).url()
                }} 
                />
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    className="absolute top-14 left-5 p-3 bg-gray-100 rounded-full" 
                >
                    <ArrowLeftIcon size={20} color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>

                        <View className='flex-row items-center space-x-1'>
                            <StarIcon size={22} color='green' opacity={0.5} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-green-500'>{rating}</Text> &middot; {genre}
                            </Text>
                        </View>
                        
                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon size={22} color='gray' opacity={0.5} />
                            <Text className='text-xs text-gray-500'>
                                Nearby &middot; {address}
                            </Text>
                        </View>

                    </View>

                    <Text className='text-gray-500 mt-2 pb-4'>{shortDescription}</Text>
                </View>

                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-200'>
                    <QuestionMarkCircleIcon color='gray' opacity={0.5} size={20}/>
                    <Text className='pl-2 flex-1 text-md font-bold'>
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color='#00CCBB'/>
                </TouchableOpacity>
            </View>

            <View className='pb-36'>
                <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                    Menu
                </Text>
                    {/* Dishes */}
                    {dishes.map(item => (
                        <DishRow
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.shortDescription}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
               
            </View>
        </ScrollView>
        </>
    )
}

export default RestaurantScreen