import { Box, Center, HStack, ScrollView, Text, Image, VStack } from 'native-base'
import React, { Fragment } from 'react'
import { Post } from '../components/Post'
import { windowHeight } from '../styles/constants'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { IconHorizontalScrollView } from '../components/IconHorizontalScrollView';

type Props = {}



const sample = require("../../assets/images/sample.jpg")
const TopTitleBar = () => {
    const iconSize = 25
    return (
        <HStack justifyContent={'space-between'} px={3} pb={2} alignItems={'center'}>
            <Box>
                <Text fontSize={'2xl'} fontWeight={'bold'}>
                    Instagram
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

export const Home = (props: Props) => {
    return (
        <Box safeArea bg={'white'}>
            <TopTitleBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center>
                    <IconHorizontalScrollView />

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