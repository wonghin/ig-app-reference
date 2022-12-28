import { Box, HStack, ScrollView, VStack, Image, Text } from 'native-base'
import React from 'react'
import { sample } from '../../assets/images/images'
import { windowHeight } from '../styles/constants'

export const IconHorizontalScrollView = () => {
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
                                    source={
                                        sample
                                    } alt="Alternate Text" />
                            </Box>
                            <Text fontSize={12}>scenery</Text>
                        </VStack>
                    )
                })}
            </HStack>
        </ScrollView>
    )
}

