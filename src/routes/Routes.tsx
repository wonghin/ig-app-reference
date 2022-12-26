import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Discover } from '../screens/Discover';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Reels } from '../screens/Reels';
import { Shop } from '../screens/Shop';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
    return (
        <Tab.Navigator
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