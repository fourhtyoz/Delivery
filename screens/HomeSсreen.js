import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';


const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        * [_type == 'featured'] {
        ...,
        restaurant[]-> {
          ...,
          dishes[]->
        }
      }`).then(data =>  setFeaturedCategories(data))
    }, [])

  return (
    <>
    <SafeAreaView className='bg-white pt-5'>
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
                source={require('../assets/placeholder.avif')}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                {/* TODO */}
                <Text className='font-bold text-xl' >
                    Current Location
                    <ChevronDownIcon size={20} color='#00CCBB'/>
                </Text>

            </View>
            {/* TODO */}
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                <UserIcon size={35} color='#00CCBB' />
            </TouchableOpacity>
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
            <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                <MagnifyingGlassIcon size={20} color='gray'/>
                <TextInput 
                    placeholder='Restaurants and cuisines'
                    keyboardType='default'
                />
            </View>
            <TouchableOpacity>
                <AdjustmentsVerticalIcon color='#00CCBB'/>
            </TouchableOpacity>
        </View>

        {/* Body */}
        <ScrollView
            className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            {/* Categories */}
            <Categories />

            {/* Featured Rows */}
            {featuredCategories.map(item => {
                return (<FeaturedRow 
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    description={item.shortDescription}
                />)
            })}

        </ScrollView>
    </SafeAreaView>
   
    </>
  )
}

export default HomeScreen