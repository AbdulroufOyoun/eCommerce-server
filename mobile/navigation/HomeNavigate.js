import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import Product from '../screens/Product'
const Stack = createNativeStackNavigator();

export default function HomeNavigate({ navigation }) {
    return (
        // <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
        // </NavigationContainer>

    );
}