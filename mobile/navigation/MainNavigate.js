
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigate from './HomeNavigate'
import CategoryNavigate from './CategoryNavigate'
import ProfileNavigate from './ProfileNavigate'
const Tab = createBottomTabNavigator();

export default function MainNavigate({ navigation }) {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                fontSize: 18,
            }}>
                <Tab.Screen name="HomeNavigate" component={HomeNavigate} options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (null
                    ), showLabel: true,

                }} />
                <Tab.Screen name="CategoryNavigate" component={CategoryNavigate} options={{
                    title: 'Category',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (null
                    ), showLabel: true,
                    labelStyle: {
                        fontSize: 50,
                    },
                }} />
                <Tab.Screen name="ProfileNavigate" component={ProfileNavigate} options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (null
                    ), showLabel: true,
                    labelStyle: {
                        fontSize: 50,
                    },
                }} />
            </Tab.Navigator>

        </NavigationContainer >

    );
}
