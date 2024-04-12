import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      <CategoryCard title='testing' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='testing' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='testing' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='testing' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='testing' imgUrl='https://links.papareact.com/gn7' />
    </ScrollView>
  )
}

export default Categories