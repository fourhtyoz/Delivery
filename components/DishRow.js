import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {
    const [isPressed, setIsPressed] = useState(false)
    const [quantity, setQuantity] = useState(0)
  return (
    <>
    <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 mt-1 ${isPressed && "border-b-0"}`}
    >
        <View className='flex-row'>
            <View className='flex-1 pr-2'>
                <Text className='text-lg mb-1'>{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
                <Text className='text-gray-400 mt-2'>
                    {price} USD
                </Text>
            </View>
       
        <Image 
            style={{
                borderWidth: 1,
                borderColor: '#f3f3f3'
            }}
            className='h-20 w-20 p-4 bg-gray-300'
            source={{
                uri: urlFor(image).url()
            }}
        />
        </View>
    </TouchableOpacity>

    {isPressed && (
        <View className='bg-white px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
                <TouchableOpacity>
                    <MinusCircleIcon size={40} color='#00CCBB'/>
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity>
                    <PlusCircleIcon size={40} color='#00CCBB' />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow