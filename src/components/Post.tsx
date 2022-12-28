import { Box, HStack, VStack, Image, Text, Center } from 'native-base'
import React from 'react'
import { marginEdge, windowHeight, windowWidth } from '../styles/constants'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sample } from '../../assets/images/images';


export const Post = () => {

    return (
        <VStack borderWidth={0} width={windowWidth} space={2} pb={2} px={marginEdge}>
            <HStack bg={'white'} pt={4} px={marginEdge} alignItems={'center'} justifyContent={'space-between'}>
                <HStack>
                    <Box pr={2}>
                        <Image size={10} borderRadius={100} source={
                            sample
                        } alt="Alternate Text" />
                    </Box>
                    <VStack>
                        <Box>Name of user</Box>
                        <Box mt={-1} _text={{ fontSize: '11' }}>This is location</Box>
                    </VStack>
                </HStack>
                <Box>
                    <Entypo name="dots-three-horizontal" size={17} color="black" />
                </Box>
            </HStack>
            <Center >
                <Image size={300} alt="fallback text" source={
                    sample
                } />

            </Center>

            <HStack justifyContent={'space-between'} >
                <Text fontSize={'14'}>Install Now</Text>
                <Box>
                    <Feather name="chevron-right" size={24} color="black" />
                </Box>
            </HStack>

            <HStack justifyContent={'space-between'}>
                <HStack space={5}>
                    <Ionicons name="md-heart-outline" size={24} color="black" />
                    <Ionicons name="chatbubble-outline" size={24} color="black" />
                    <Ionicons name="ios-arrow-redo-outline" size={24} color="black" />
                </HStack>
                <Box>
                    <MaterialCommunityIcons name="bookmark-outline" size={24} color="black" />
                </Box>
            </HStack>

            <VStack>
                <Box>120 likes</Box>
                <HStack space={1} mb={-1}>
                    <Box _text={{ fontWeight: 'semibold' }}>andy</Box>
                    <Box>this is a comment</Box>
                </HStack>
                <HStack space={1}>
                    <Box _text={{ fontWeight: 'semibold' }}>andy</Box>
                    <Box>this is a comment</Box>
                </HStack>
                <Text color={'gray.500'}>
                    View all {10} comments
                </Text>
                <Text color={'gray.500'} fontSize={13}>{15} minutes ago</Text>
            </VStack>




        </VStack >
    )
}
