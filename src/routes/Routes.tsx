import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { PersonalImage } from '../screens/Profile/PersonalImage';
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
                // tabBarStyle: { height: 200 },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={iconSize} color="black" />
                    ),

                }}
                name="Home" component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Feather name="search" size={iconSize} color="black" />
                    ),
                }}
                name="Discover" component={Discover} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Octicons name="video" size={iconSize} color="black" />
                    ),
                }}
                name="Reels" component={Reels} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="shopping-outline" size={iconSize} color="black" />
                    ),
                }}
                name="Shop" component={Shop} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="insert-emoticon" size={iconSize} color="black" />
                    ),
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
//             <ProfileTab.Screen name="PersonalImage" component={PersonalImage} />
//             <ProfileTab.Screen name="PersonalReels" component={PersonalReels} />
//             <ProfileTab.Screen name="PersonalTags" component={PersonalTags} />

//         </ProfileTab.Navigator>
//     );
// }