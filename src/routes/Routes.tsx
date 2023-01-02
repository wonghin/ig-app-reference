import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Discover } from '../screens/Discover';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile/Profile';
import { Reels } from '../screens/Reels';
import { Shop } from '../screens/Shop';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { RootStackParamList, RootTopParamList } from './RootStackParamList ';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { PersonalPost } from '../screens/Profile/PersonalPosts';
import { PersonalReels } from '../screens/Profile/PersonalReels';
import { PersonalTags } from '../screens/Profile/PersonalTags';
import { iconSize } from '../styles/constants';
const Tab = createBottomTabNavigator<RootStackParamList>();


export function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarStyle: { height: 100 },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <Entypo name="home" size={iconSize} color="black" />
                            : <Entypo name="home" size={iconSize} color="gray" />
                    ),

                }}
                name="Home" component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <Feather name="search" size={30} color="black" />
                            : <Feather name="search" size={iconSize} color="gray" />),
                }}
                name="Discover" component={Discover} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <Octicons name="video" size={30} color="black" />
                            : <Octicons name="video" size={iconSize} color="gray" />),
                }}
                name="Reels" component={Reels} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <MaterialCommunityIcons name="shopping-outline" size={30} color="black" />
                            : <MaterialCommunityIcons name="shopping-outline" size={iconSize} color="gray" />),
                }}
                name="Shop" component={Shop} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <MaterialIcons name="insert-emoticon" size={30} color="black" />
                            : <MaterialIcons name="insert-emoticon" size={iconSize} color="gray" />),
                }}
                name="Profile" component={Profile} />
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

// const ProfileTab = createMaterialTopTabNavigator<RootTopParamList>();

// export function ProfileTabNavigation() {
//     return (
//         <ProfileTab.Navigator>
//             <ProfileTab.Screen name="PersonalPost" component={PersonalPost} />
//             <ProfileTab.Screen name="PersonalReels" component={PersonalReels} />
//             <ProfileTab.Screen name="PersonalTags" component={PersonalTags} />

//         </ProfileTab.Navigator>
//     );
// }