import { useNavigation } from '@react-navigation/native'
import { Box, Input, VStack, ScrollView, Button, Center, Divider, HStack, Text, Flex, Heading } from 'native-base'
import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { NavigationScreenProps } from '../routes/RootStackParamList '
import { marginEdge } from '../styles/constants'


export const Login = ({ navigation }: NavigationScreenProps) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Box safeAreaTop alignItems={'center'} justifyContent={'center'} flex={1}
                    bg='white'
                >
                    <Box _text={{ fontWeight: 'bold', fontSize: '4xl' }} mb={16}>
                        Instagram
                    </Box>


                    <VStack width={"90%"} space={1}>
                        <Input _input={{ h: 10 }} placeholder='phone number, username or email' />
                        <Input _input={{ h: 10 }} placeholder='password' />
                        <Button variant={'link'} justifyContent={'flex-end'}
                            _text={{ fontSize: 12, fontWeight: 'bold' }}
                        >
                            Forgot password?
                        </Button>
                        <Button onPress={() => navigation.navigate('BottomNavigation', { screen: 'Home' })}
                            mt={2}
                        >
                            Login
                        </Button>

                        <VStack alignItems={'center'} space={10} mt={8}>
                            <Button variant={'link'} _text={{ fontWeight: 'bold' }}>Continue as Nathan Borror</Button>
                            <HStack alignItems={'center'} space={2} px={marginEdge}>
                                <Box width={'50%'} borderTopWidth={1} borderColor={'gray.300'}></Box>
                                <Box _text={{ color: 'gray.500' }}>OR</Box>
                                <Box width={'50%'} borderTopWidth={1} borderColor={'gray.300'}></Box>
                            </HStack>
                            <HStack alignItems={'center'}>
                                <Text color={'gray.500'}>Don't have an account?</Text>
                                <Button variant={'link'} _text={{ fontWeight: 'bold', }}>Sign Up</Button>
                                <Text>.</Text>
                            </HStack>
                        </VStack>
                    </VStack>


                </Box>
            </TouchableWithoutFeedback >

            {/* Bottom footer */}
            <Box safeAreaBottom _text={{ color: 'gray.300' }} alignItems={'center'} bg={'white'}>
                Instagram from Facebook
            </Box>

        </>
    );


}
