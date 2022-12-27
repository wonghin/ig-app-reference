import { useNavigation } from '@react-navigation/native'
import { Box, Input, VStack, ScrollView, Button, Center } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps, NavigationScreenProps2 } from '../routes/RootStackParamList '


export const Login = ({ navigation }: NavigationScreenProps) => {
    return (
        <Box safeArea alignItems={'center'} justifyContent={'center'} flex={1}
            bg='black'
        >
            <VStack width={"60%"} space={1}>
                <Input placeholder='email' />
                <Input placeholder='password' />
                <Button onPress={() => navigation.navigate('BottomNavigation', { screen: 'Home' })}
                    mt={2}
                >
                    Login
                </Button>
            </VStack>

        </Box>
    );


}
