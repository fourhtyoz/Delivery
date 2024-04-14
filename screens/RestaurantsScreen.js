import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const RestaurantsScreen = () => {
    const { params: { title } } = useRoute()
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default RestaurantsScreen