import React, { useState, useEffect } from "react";

import { ActivityIndicator } from 'react-native-paper';
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import CategoryCard from "../components/CategoryCard";
import { ShowCategories } from '../data'
import CategoryProducts from './CategoryProducts'



export default function MainCategory({ navigation }) {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [response, setResponse] = useState()




    const redirectCategory = (id) => {

        navigation.navigate({
            name: 'CategoryProducts',
            params: { categoryId: id },
            merge: true

        })

    }

    useEffect(() => {
        ShowCategories()
            .then((result) => {
                setResponse(result)
                setIsLoading(false)
            },
                (error) => {
                    setIsLoading(false);
                    setError(error)
                }
            )
    }, [])
    const renderItem = ({ item }) => {
        return (
            <View className='border-solid mt-3'>
                <Text className='text-2xl'>{item.category}</Text>
                <FlatList
                    data={item.child_category}
                    keyExtractor={(childCategory) => childCategory.id}
                    renderItem={({ item: childCategory }) => (
                        <View className=' mt-5 ' >
                            <TouchableOpacity onPress={() => redirectCategory(childCategory.id)} >
                                <CategoryCard item={childCategory} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    };
    const getProducts = () => {
        if (isLoading) {
            return <ActivityIndicator className="mt-10" />
        } else {
            return <View className=' ml-3 mr-3 ' >
                <FlatList

                    data={response}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
                {/* <FlatList className='h-72 basis-1/2 bg-slate-500'
                    data={response}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.category}</Text>
                            <FlatList
                                className='h-72 basis-1/2 bg-slate-500'
                                data={item.child_category}
                                keyExtractor={(categoryItem) => categoryItem.id}
                                renderItem={({ child_category }) => (
                                    <View>
                                        {redirectCategory(child_category)}
                                        <Text>{categoryItem}</Text>
                                        <CategoryCard item={categoryItem} />
                                    </View>
                                )}
                            />
                        </View>
                    )}
                /> */}
            </View>
        }
    }

    return (
        <View >
            {getProducts()}
        </View>
    )
}