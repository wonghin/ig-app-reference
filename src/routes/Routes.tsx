import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Discover } from '../screens/Discover';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Reels } from '../screens/Reels';
import { Shop } from '../screens/Shop';

const Tab = createBottomTabNavigator();

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



const TopTab = createMaterialTopTabNavigator();

// export function TopNavigation() {
//     return (
//         <TopTab.Navigator
//             screenOptions={{

//             }}
//         >
//             <TopTab.Screen name="BottomNavigation" component={BottomNavigation} />
//             {/* <TopTab.Screen name="Settings" component={SettingsScreen} /> */}
//         </TopTab.Navigator>
//     );
// }