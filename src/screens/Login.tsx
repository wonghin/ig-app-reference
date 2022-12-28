import { useNavigation } from '@react-navigation/native'
import { Box, Input, VStack, ScrollView, Button, Center } from 'native-base'
import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { NavigationScreenProps } from '../routes/RootStackParamList '


export const Login = ({ navigation }: NavigationScreenProps) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box safeArea alignItems={'center'} justifyContent={'center'} flex={1}
                bg='black'
            >
                <VStack width={"60%"} space={1}>

                    <Input _input={{ color: 'white' }} placeholder='email' />
                    <Input _input={{ color: 'white' }} placeholder='password' />
                    <Button onPress={() => navigation.navigate('BottomNavigation', { screen: 'Home' })}
                        mt={2}
                    >
                        Login
                    </Button>
                </VStack>
            </Box>
        </TouchableWithoutFeedback>
    );


}
