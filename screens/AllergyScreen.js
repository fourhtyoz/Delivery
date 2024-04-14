import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const AllergyScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={navigation.goBack}>
                <Text>X</Text>
            </TouchableOpacity>
      <Text>AllergyScreen</Text>
    </SafeAreaView>
  )
}

export default AllergyScreen