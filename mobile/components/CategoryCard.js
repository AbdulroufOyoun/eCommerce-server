import { React } from 'react';
import { Card, Text } from 'react-native-paper';


export default function CategoryCard({ item }) {
    // console.log(item)
    return (
        <Card >
            <Card.Cover source={{ uri: 'http://192.168.1.105:8000/images/' + item.image }} />
            <Card.Title title={item.category} />

        </Card>
    )
}