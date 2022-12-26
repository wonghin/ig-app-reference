import { Box, Center, HStack, ScrollView, Text, Image, VStack } from 'native-base'
import React, { Fragment } from 'react'
import { Post } from '../components/Post'
import { windowHeight } from '../styles/constants'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

type Props = {}


const TopTitleBar = () => {
    const iconSize = 25
    return (
        <HStack justifyContent={'space-between'} px={3} pb={2} alignItems={'center'}>
            <Box>
                <Text fontSize={'2xl'} fontWeight={'bold'}>
                    Instergram
                </Text>
            </Box>
            <HStack space={6} alignItems={'center'}>
                <Octicons name="diff-added" size={iconSize} color="black" />
                <Ionicons name="md-heart-outline" size={iconSize} color="black" />
                <Ionicons name="md-chatbubble-ellipses-outline" size={iconSize} color="black" />
            </HStack>

        </HStack>
    )
}


const TopFollowingsIconBar = () => {
    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={4} height={windowHeight * 0.11} alignItems={'center'} px={3}>
                {Array.from(Array(20)).map((_, index) => {
                    return (
                        <VStack key={index} alignItems={'center'}>
                            <Box borderWidth={4} borderRadius={100} borderColor={'black'}>
                                <Image size={windowHeight * 0.08}
                                    borderRadius={100}
                                    borderColor={'white'}
                                    borderWidth={3}
                                    source={{
                                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                                    }} alt="Alternate Text" />
                            </Box>
                            <Text fontSize={12}>scenery</Text>
                        </VStack>
                    )
                })}
            </HStack>
        </ScrollView>

    )
}

export const Home = (props: Props) => {
    return (
        <Box safeArea bg={'white'}>
            <TopTitleBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center>
                    <TopFollowingsIconBar />

                    {Array.from(Array(10)).map((_, index) => {
                        return (
                            <Post key={index} />

                        )
                    })}
                </Center>
            </ScrollView>

        </Box>
    )
}