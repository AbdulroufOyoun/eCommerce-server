import { React } from 'react';
import { Card, Text } from 'react-native-paper';

export default function Products_card({ item, pressHandler, navigation }) {

    return (
        <Card>
            <Card.Cover source={{ uri: 'http://192.168.1.105:8000/products_posters/' + item.poster }} />
            <Card.Title title={item.category} />
            <Card.Content>
                <Text variant="titleLarge">{item.title}</Text>
                <Text variant="bodyMedium">{item.description}</Text>
                <Text className='text-right' variant="titleMedium">{item.price} $</Text>
            </Card.Content>

        </Card>
    )
}