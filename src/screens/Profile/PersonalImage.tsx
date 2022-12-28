import { Box, Center, Divider, HStack, ScrollView, VStack } from 'native-base'
import React from 'react'
import { windowHeight } from '../../styles/constants'
import { PostGridExample } from './mocks/PostGridExample'

export const PersonalImage = () => {
    return (
        // <ScrollView bg={'white'}>
        <Center bg={'white'}>
            <PostGridExample />
        </Center>
        // </ScrollView>
    )
}
