import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { selectBasketItemsWithId } from '../features/basketSlice'
import { addToBasket } from '../features/basketSlice'
import { removeFromBasket } from '../features/basketSlice'

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {
    const [isPressed, setIsPressed] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }
    const removeItemFromBasket = () => {
        if (!basketItems.length > 0) {
            return
        }
        dispatch(removeFromBasket({ id }))
    }
    const basketItems = useSelector(state => selectBasketItemsWithId(state, id))
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
                    ${price}.00
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
                <TouchableOpacity disabled={!basketItems.length} onPress={removeItemFromBasket}>
                    <MinusCircleIcon size={40} color={basketItems.length > 0 ? '#00CCBB' : 'gray'}/>
                </TouchableOpacity>
                <Text>{basketItems.length}</Text>
                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon size={40} color='#00CCBB' />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow