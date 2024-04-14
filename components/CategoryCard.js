import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ imgUrl, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate('Restaurants', { title })} className="relative mr-2">
      <Image
        className="w-20 h-20 rounded"
        source={{
            uri: imgUrl
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;