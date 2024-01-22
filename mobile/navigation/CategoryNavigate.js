import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainCategory from '../screens/MainCategory'
import CategoryProducts from '../screens/CategoryProducts'
const Stack = createNativeStackNavigator();

export default function CategoryNavigate({ navigation }) {
    return (

        <Stack.Navigator>
            <Stack.Screen name="MainCategory" component={MainCategory} options={{
                title: 'Categories',
            }} />
            <Stack.Screen name="CategoryProducts" component={CategoryProducts} options={{
                title: 'Category',
            }} />
        </Stack.Navigator>

    );
}