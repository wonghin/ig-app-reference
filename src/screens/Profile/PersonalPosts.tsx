import { Box, Center, Divider, HStack, ScrollView, VStack } from 'native-base'
import React from 'react'
import { useNavBarStyleStore } from '../../hooks/useNavBarStyleStore'
import { useNumberOfPostStore } from '../../hooks/useNumberofPostStore'
import { windowHeight } from '../../styles/constants'
import { PostGridExample } from './mocks/PostGridExample'

export const PersonalPost = () => {
    const height = useNumberOfPostStore(state => state.height)
    const setIsDraged = useNavBarStyleStore(state => state.setIsDraged)

    return (
        <ScrollView bg={'white'}
            contentContainerStyle={{ height: 10000 }}
        >
            <PostGridExample numOfCol={3} />
            {/* {
                Array.from(Array(100).map((_, index) => {
                    return (
                        <Box key={index}> 123</Box>

                    )
                }))
            } */}

        </ScrollView>
    )
}
