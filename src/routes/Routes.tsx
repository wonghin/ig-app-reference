import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Discover } from '../screens/Discover';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Reels } from '../screens/Reels';
import { Shop } from '../screens/Shop';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { RootStackParamList } from './RootStackParamList ';

const Tab = createBottomTabNavigator<RootStackParamList>();

export function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}



const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    );
}