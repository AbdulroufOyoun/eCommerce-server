import React, { useState, useEffect } from "react";

import { ActivityIndicator } from 'react-native-paper';
import { View, FlatList, TouchableOpacity } from "react-native";
import Products_card from "../components/products_card";
import { ShowCategoryProducts } from '../data'

export default function Product({ navigation }) {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [response, setResponse] = useState()

    const redirect_product = () => {
        alert('test')
        navigation.navigate(Product)
    }

    useEffect(() => {

        ShowCategoryProducts().then((result) => {
            setResponse(result)
            setIsLoading(false)
        },
            (error) => {
                setIsLoading(false);
                console.log(error)
                setError(error)
            }
        )
    }, [])
    const getProducts = () => {
        if (isLoading) {
            return <ActivityIndicator className="mt-10" />
        } else {
            return <View>
                <FlatList
                    data={response}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className='mx-6 mt-6 '
                        >
                            <TouchableOpacity onPress={redirect_product}>
                                <Products_card item={item} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        }
    }

    return (
        <View >
            {getProducts()}
        </View>
    )
}