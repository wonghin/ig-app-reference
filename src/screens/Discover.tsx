import { Box, Center, Input, ScrollView, VStack } from 'native-base'
import React from 'react'
import { marginEdge } from '../styles/constants'
import { PostGridExample } from './Profile/mocks/PostGridExample'

export const Discover = () => {
    return (
        <ScrollView bg={'white'}>
            <Center safeAreaTop>
                <VStack>
                    <Input placeholder='Search' _input={{ color: 'black' }} h={50}></Input>
                    <PostGridExample />
                </VStack>
            </Center>

        </ScrollView>
    )
}
