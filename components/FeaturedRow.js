import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';


const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
        * [_type == "featured" && _id == $id] {
        ...,
        restaurant[]-> {
          ...,
          dishes[]->,
            type-> {
              name
            }
        }
      }[0]`, { id } ).then(data => {
        setRestaurants(data?.restaurant)
      })
    }, [id])

    if (restaurants.length > 1) {
        return (
            <View>
                <View className="mt-4 flex-row items-center justify-between px-4">
                    <Text className="font-bold text-lg">{title}</Text>
                    <ArrowRightIcon color="#00CCBB" />
                </View>
                <Text className="font-xs text-gray-500 px-4">{description}</Text>
        
                <ScrollView
                    horizontal
                    contentContainerStyle={{
                        paddingHorizontal: 15,
                    }}
                    showsHorizontalScrollIndicator={false}
                    className="pt-4"
                >
                    {restaurants.map(item => {
                       return (<RestaurantCard 
                            key={item._id}
                            id={item._id} 
                            imgUrl={item.image}
                            title={item.name}
                            rating={item.rating}
                            genre={item.type?.name}
                            address={item.address}
                            shortDescription={item.shortDescription}
                            dishes={item.dishes}
                            long={item.long}
                            lat={item.lat}
                        />)
                    })}
                </ScrollView>
            </View>
          )
    }
    else {
        return (
            <Text>hi</Text>
        )
    }
  
}

export default FeaturedRow