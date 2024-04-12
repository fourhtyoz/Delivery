import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity
        className="bg-white mr-3 shadow"
    >
        <Image 
            source={{
                uri: imgUrl
            }}
            className="h-36 w-64 rounded-sm"
            title={shortDescription}
        />
        
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={.5} size={22} />
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> &middot; {genre}
                </Text>
            </View>

            <View className="flex-row pt-2 items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">Nearby &middot; {address}</Text>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default RestaurantCard