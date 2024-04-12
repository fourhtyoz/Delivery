import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity';


const Categories = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        sanityClient.fetch(`* [_type == "category"]`)
            .then(data => setCategories(data))
    }, [])

  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {categories.map(item => (
            <CategoryCard 
                key={item._id}
                title={item.name}
                // description={item.shortDescription}
                imgUrl={urlFor(item.image).width(200).url()}
            />
        ))}
    </ScrollView>
  )
}

export default Categories