import { Box, Center, HStack, ScrollView, Text, Image, VStack } from 'native-base'
import React from 'react'
import { Post } from '../components/Post'
import { windowHeight } from '../styles/constants'

type Props = {}





const TopFollowingsIconBar = () => {
    return (
        <ScrollView horizontal >
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
        <ScrollView bg={'white'}>
            <Center safeArea>
                <TopFollowingsIconBar />
                <ScrollView>
                    {Array.from(Array(10)).map((_, index) => {
                        return (
                            <Post key={index} />

                        )
                    })}

                </ScrollView>

            </Center>
        </ScrollView>
    )
}