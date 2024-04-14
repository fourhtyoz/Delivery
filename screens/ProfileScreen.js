import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
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
            <Text>ProfileScreen</Text>
        </SafeAreaView>
    )
}

export default ProfileScreen