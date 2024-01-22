import React, { useState, useEffect } from "react";
import { ActivityIndicator } from 'react-native-paper';
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Products_card from "../components/products_card";
import { ShowCategoryProducts } from '../data'
import { DataTable } from 'react-native-paper';


const itemsPerPage = 2;

const items = [
    {
        key: 1,
        name: 'Page 1',
    },
    {
        key: 2,
        name: 'Page 2',
    },
    {
        key: 3,
        name: 'Page 3',
    },
];


export default function CategoryProducts({ navigation, route }) {
    // alert(categoryId)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [response, setResponse] = useState()

    const redirect_product = (id) => {
        // console.log(id)

        // alert(id)
        // navigation.navigate(Product)
    }
    const [page, setPage] = useState(2);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;


    useEffect(() => {


        ShowCategoryProducts(route.params.categoryId).then((result) => {
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
            return <ScrollView className='flex'>
                <DataTable >
                    <DataTable.Pagination
                        page={page}
                        numberOfPages={Math.floor(items.length / itemsPerPage)}
                        onPageChange={page => setPage(page)}
                        label={`${from + 1}-${to} of ${items.length}`}
                    />
                </DataTable>
                <FlatList
                    data={response}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className='mx-6 mt-6 '
                        >
                            <TouchableOpacity onPress={redirect_product(item.id)}>
                                <Products_card pressHandler={redirect_product} item={item} />
                            </TouchableOpacity>

                        </View>
                    )}
                />

            </ScrollView>

        }
    }

    return (
        <View >
            {getProducts()}

        </View>
    )
}