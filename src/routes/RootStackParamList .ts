import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Discover: undefined;
    Reels: undefined;
    Shop: undefined;
    Login: undefined
    // Feed: { sort: 'latest' | 'top' } | undefined;
    TopNavigation: undefined
    BottomNavigation: { screen: 'Home' | 'Discover' | 'Reels' | 'Shop' | 'Profile' } | undefined
    StackNavigation: undefined
};

export type NavigationScreenProps = NativeStackScreenProps<RootStackParamList>;
export type NavigationScreenProps2 = StackNavigationProp<RootStackParamList>