import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    // Feed: { sort: 'latest' | 'top' } | undefined;
    TopNavigation: undefined
};

export type NavigationScreenProps = NativeStackScreenProps<RootStackParamList>;
