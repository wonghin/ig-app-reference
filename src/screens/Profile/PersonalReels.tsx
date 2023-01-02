import { Box, Center, ScrollView } from 'native-base'
import React from 'react'
import { PostGridExample } from './mocks/PostGridExample'
export const PersonalReels = () => {
    return (
        <Center bg={'white'}>
            <PostGridExample numOfCol={3} />
        </Center>
    )
}
